"""Small independent matrix checks of the exact two-branch steering calculation.

NumPy only, one BLAS thread, no optimizer or network. Binary witness bounds are
analytic in the note; random measurements below only stress-check them.
"""
import os
os.environ.setdefault('OPENBLAS_NUM_THREADS', '1')
os.environ.setdefault('OMP_NUM_THREADS', '1')
from fractions import Fraction as F
from pathlib import Path
import hashlib
import json
import time
import numpy as np

ROOT = Path(__file__).resolve().parent
RNG = np.random.default_rng(510017)
X = np.array([[0., 1.], [1., 0.]])
I = np.eye(2)


def close(x, y, tol=3e-11):
    assert np.max(np.abs(np.asarray(x)-np.asarray(y))) <= tol


def tn(x):
    return float(np.abs(np.linalg.eigvalsh((x+x.conj().T)/2)).sum())


def outer(x):
    return np.outer(x, x.conj())


def povm(m):
    zs = [RNG.normal(size=(2, 2))+1j*RNG.normal(size=(2, 2)) for _ in range(m)]
    fs = [z@z.conj().T for z in zs]
    w, v = np.linalg.eigh(sum(fs))
    h = (v/np.sqrt(w))@v.conj().T
    return [h@f@h for f in fs]


def prepare(psi, effect):
    # psi axes A,B,C. Explicit Born contraction, independent of dephasing formula.
    return np.einsum('abc,dec,eb->ad', psi, psi.conj(), effect)


def branch_checks():
    cases = witnesses = 0
    max_error = 0.
    for q in [0.5, 0.2, 0.01, 1e-6]:
        p = 1-q
        d = np.diag(np.sqrt([p,q]))
        for k in [0., 0.3, 0.8, 0.999, 1.]:
            psi = np.zeros((2,2,2), complex)
            psi[0,0,0] = np.sqrt(p)
            psi[1,1,:] = np.sqrt(q)*np.array([k, np.sqrt(1-k*k)])
            exact = (1-k)*np.sqrt(p*q)
            targets = [d@(I+sgn*X)@d/2 for sgn in [1,-1]]
            attained = sum(tn(t-prepare(psi,(I+sgn*X)/2))
                           for t,sgn in zip(targets,[1,-1]))/2
            close(attained, exact)
            for _ in range(20):
                e = povm(2)[0]
                delta = targets[0]-prepare(psi,e)
                witness = np.trace(X@delta).real
                assert tn(delta)+3e-11 >= witness >= exact-3e-11
                witnesses += 1
            for m in [2,3,8]:
                for _ in range(4):
                    es = povm(m)
                    targets = [d@e.T@d for e in es]
                    close(sum(targets),d@d)
                    mus = [prepare(psi,e) for e in es]
                    for t,mu in zip(targets,mus):
                        predicted = t.copy()
                        predicted[0,1] *= k
                        predicted[1,0] *= k
                        max_error = max(max_error,float(np.max(abs(mu-predicted))))
                        close(mu,predicted)
                    cost = sum(tn(t-mu) for t,mu in zip(targets,mus))/2
                    close(cost,(1-k)*sum(abs(t[0,1]) for t in targets))
                    assert cost <= exact+3e-11
                    cases += 1
            # Optimal expectation defect; compare also with random competitors.
            u, v = outer(np.array([1.,0.])), outer(np.array([k,np.sqrt(1-k*k)]))
            delta_exact = q*np.sqrt(1-k*k)
            close((p*tn(u-u)+q*tn(v-u))/2,delta_exact)
            for _ in range(10):
                z = RNG.normal(size=(2,2))+1j*RNG.normal(size=(2,2))
                tau = z@z.conj().T
                tau /= np.trace(tau)
                assert (p*tn(u-tau)+q*tn(v-tau))/2 >= delta_exact-3e-11
    return dict(ensemble_cases=cases,random_binary_witness_cases=witnesses,
                maximal_entry_error=max_error,expectation_competitors=200)


def rational_checks():
    rows = []
    for m in [1,2,10,1000]:
        q,p,c = F(1,m*m+1),F(m*m,m*m+1),F(m,m*m+1)
        assert c*c == p*q
        for n in [1,2,3,10]:
            k,t = F(n*n-1,n*n+1),F(2*n,n*n+1)
            assert k*k+t*t == 1
            s,delta = (1-k)*c,q*t
            assert s*s <= 2*delta-delta*delta
            rows.append(dict(q=str(q),kappa=str(k),s=str(s),delta=str(delta)))
    return rows


def kron_all(xs):
    out = np.array([1.])
    for x in xs:
        out = np.kron(out,x)
    return out


def chain_checks():
    cases = 0
    theta = 0.6*0.55**np.arange(1,6)
    n = len(theta)
    for q in [0.5,0.2,0.01]:
        p = 1-q
        for r in range(n+1):
            b0 = kron_all([np.array([1.,0.])]*(r+1))
            b1 = kron_all([np.array([0.,1.])]+[np.array([np.cos(t),np.sin(t)]) for t in theta[:r]])
            c0 = kron_all([np.array([1.,0.])]*(n-r))
            c1 = kron_all([np.array([np.cos(t),np.sin(t)]) for t in theta[r:]])
            psi = np.stack([np.sqrt(p)*np.outer(b0,c0),np.sqrt(q)*np.outer(b1,c1)])
            logical = np.column_stack([b0,b1])
            plus = logical@(I+X)@logical.T/2
            # Complement assigned to minus: a physical, normalized two-effect POVM.
            minus = np.eye(len(b0))-plus
            d = np.diag(np.sqrt([p,q]))
            cost = sum(tn(d@(I+sgn*X)@d/2-prepare(psi,e))
                       for sgn,e in [(1,plus),(-1,minus)])/2
            k = float(np.prod(np.cos(theta[r:])))
            close(cost,np.sqrt(p*q)*(1-k))
            v = float(sum(theta[r:]**2))
            assert np.sqrt(p*q)*(-np.expm1(-v/2))-3e-11 <= cost
            assert cost <= np.sqrt(p*q)*v/2+3e-11
            cases += 1
    # Infinite geometric tail: log products avoid catastrophic cancellation.
    rates=[]
    for r in [0,2,5,10,20]:
        tail = 0.6*0.55**np.arange(r+1,300)
        loss = -np.expm1(np.log1p(-2*np.sin(tail/2)**2).sum())
        v = 0.6**2*0.55**(2*(r+1))/(1-0.55**2)
        assert -np.expm1(-v/2)-1e-15 <= loss <= v/2+1e-15
        rates.append(dict(R=r,steering_defect_p_half=0.5*loss,
                          ratio_to_asymptotic=loss/(v/2)))
    return dict(full_tensor_cases=cases,geometric_tail=rates)


def parent_checks():
    results=[]
    for n in [1,2,3,4]:
        q=0.2
        ent = np.array([np.sqrt(1-q),0,0,np.sqrt(q)])
        h0 = np.kron(np.eye(4)-outer(ent),np.eye(2**n))
        for j in range(n):
            h0 += kron_all([I,I]+[np.diag([0.,1.]) if k==j else I for k in range(n)])
        env = kron_all([np.array([[np.cos(t),-np.sin(t)],[np.sin(t),np.cos(t)]])
                        for t in 0.6*0.55**np.arange(1,n+1)])
        u = np.kron(np.diag([1.,0.]),np.eye(2**(n+1)))+np.kron(np.diag([0.,1.]),np.kron(I,env))
        h=u@h0@u.T
        ev=np.linalg.eigvalsh(h)
        close(ev,np.linalg.eigvalsh(h0))
        close(ev[:2],[0.,1.])
        ground=u@np.kron(ent,kron_all([np.array([1.,0.])]*n))
        close(h@ground,np.zeros(len(ground)))
        results.append(dict(environment_qubits=n,gap=float(ev[1]-ev[0])))
    return results


if __name__ == '__main__':
    start=time.perf_counter()
    report=dict(status='passed',seed=510017,branches=branch_checks(),
                rational=rational_checks(),chain=chain_checks(),parents=parent_checks())
    report['elapsed_seconds']=time.perf_counter()-start
    report['sha256']={n:hashlib.sha256((ROOT/n).read_bytes()).hexdigest()
                      for n in ['verify51.py','steering-localization.tex','piste51-cloture.md']}
    report['limits']='Finite matrix checks, not a formal proof or a certification of novelty.'
    (ROOT/'verification51.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({k:report[k] for k in ['status','branches','chain','parents','elapsed_seconds']},indent=2))
