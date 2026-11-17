"""Small exact examples and numerical stress checks of the accompanying proofs.

No network, no Git, no optimizer, no claim to certify the infinite-algebra proof
or bibliographic novelty. Run with the bundled Python (NumPy already available).
"""
import os
os.environ.setdefault('OPENBLAS_NUM_THREADS', '1')
os.environ.setdefault('OMP_NUM_THREADS', '1')
from fractions import Fraction as F
from pathlib import Path
import hashlib
import json
import numpy as np

ROOT = Path(__file__).resolve().parent
RNG = np.random.default_rng(20512026)


def close(a, b, atol=2e-10):
    assert np.allclose(a, b, atol=atol, rtol=0), np.max(np.abs(a-b))


def tn(a):
    return float(np.abs(np.linalg.eigvalsh((a+a.conj().T)/2)).sum())


def psd(a):
    assert np.linalg.eigvalsh((a+a.conj().T)/2).min() >= -2e-10


def root(a):
    w, v = np.linalg.eigh(a)
    assert w.min() >= -2e-10
    return (v*np.sqrt(np.maximum(w, 0)))@v.conj().T


def invroot(a):
    w, v = np.linalg.eigh(a)
    assert w.min() > 1e-12
    return (v/np.sqrt(w))@v.conj().T


def wishart(d):
    z = RNG.normal(size=(d, d))+1j*RNG.normal(size=(d, d))
    return z@z.conj().T


def state(d):
    a = wishart(d)
    return a/np.trace(a).real


def blockdiag(blocks):
    d = blocks[0].shape[0]
    out = np.zeros((len(blocks)*d,)*2, complex)
    for i, b in enumerate(blocks):
        out[i*d:(i+1)*d, i*d:(i+1)*d] = b
    return out


def repair(blocks):
    # Internal basis order is Y,B; each block is a matrix on B.
    beta = sum(blocks)
    b = beta.shape[0]
    r = b*np.linalg.eigvalsh(beta).max()
    leftover = r*np.eye(b)/b-beta
    out = [x/r for x in blocks]
    out[0] = out[0]+leftover/r
    return out, r


def exact_checks():
    curves = []
    for t in [F(1,2), F(1,10), F(1,100), F(1,1000)]:
        plus = [(1+t)/2, (1-t)/2]
        minus = plus[::-1]
        two = [(plus[i]*plus[j]+minus[i]*minus[j])/2
               for i in range(2) for j in range(2)]
        eta = sum(abs(x-F(1,4)) for x in two)
        cost = sum(abs(x-F(1,2)) for x in plus)
        assert eta == t*t and cost == t
        curves.append({'t': str(t), 'two_copy_error': str(eta),
                       'mean_termwise_cost': str(cost), 'cost_over_error': str(cost/eta)})

    blocks = [np.array([[F(3,10), F(1,10)], [F(1,10), F(1,10)]], dtype=object),
              np.array([[F(1,5), -F(1,20)], [-F(1,20), F(2,5)]], dtype=object)]
    tau = np.array([[F(1,2), F(0)], [F(0), F(1,2)]], dtype=object)
    r = F(11,10)
    corrected = [(blocks[0]+r*tau-sum(blocks))/r, blocks[1]/r]
    assert np.array_equal(sum(corrected), tau)
    for a in blocks+corrected+[r*tau-sum(blocks)]:
        assert a[0,0] >= 0 and a[1,1] >= 0
        assert a[0,0]*a[1,1]-a[0,1]*a[1,0] >= 0

    ghz = []
    for m in [1, 2, 3, 10, 100, 1000]:
        p, q, c = F(m*m, m*m+1), F(1, m*m+1), F(m, m*m+1)
        # For both outcomes, target minus reachable diagonal has off-diagonal +/-c/2.
        delta = np.array([[F(0), c/2], [c/2, F(0)]], dtype=object)
        assert np.array_equal(delta@delta, np.eye(2, dtype=object)*c*c/4)
        assert c*c == p*q
        for u in [F(0), F(1,7), F(1,2), F(1)]:
            # Half trace distance between diagonal rho_AC and rho_A tensor tau_C.
            dist = (abs(p-p*(1-u))+abs(-p*u)+abs(-q*(1-u))+abs(q-q*u))/2
            assert dist == q+(p-q)*u and dist >= q
        # Witness +/- X attains c in trace-norm duality for each outcome.
        x = np.array([[F(0), F(1)], [F(1), F(0)]], dtype=object)
        assert np.trace(x@delta) == c
        ghz.append({'q': str(q), 'optimal_expectation_defect': str(q),
                    'complete_steering_defect': str(c), 'ratio': str(c/q)})

    # Product state: every binary probability gives exactly half-distance 1/2.
    for q in [F(0), F(1,11), F(1,2), F(1)]:
        norms = [abs(F(1,2)-q/2)+abs(-q/2),
                 abs(-(1-q)/2)+abs(F(1,2)-(1-q)/2)]
        assert sum(norms)/2 == F(1,2)
    return {'piste20_square_root': curves, 'piste20_noncommuting_repair': 'exact PSD and marginal checks passed',
            'piste51_GHZ': ghz, 'piste51_product_binary_defect': '1/2'}


def rounding_checks():
    max_local_ratio = 0.0
    min_margin = float('inf')
    cases = 0
    for b in [2, 3]:
        for y in [2, 3]:
            for _ in range(8):
                a, n = 2, 4
                weights = RNG.dirichlet(np.ones(n))
                alphas = [state(a) for _ in range(n)]
                ensembles, corrected, betas = [], [], []
                for _x in range(n):
                    blocks = [wishart(b) for _y in range(y)]
                    tr = sum(np.trace(z).real for z in blocks)
                    blocks = [z/tr for z in blocks]
                    out, r = repair(blocks)
                    for z in out:
                        psd(z)
                    close(sum(out), np.eye(b)/b)
                    err = tn(blockdiag(out)-blockdiag(blocks))
                    bound = 2*(r-1)/r
                    assert err <= bound+2e-10
                    max_local_ratio = max(max_local_ratio, err/bound)
                    ensembles.append(blockdiag(blocks))
                    corrected.append(blockdiag(out))
                    betas.append(sum(blocks))
                beta2 = sum(p*np.kron(z,z) for p,z in zip(weights,betas))
                variance = sum(p*np.linalg.norm(z-np.eye(b)/b, 'fro')**2 for p,z in zip(weights,betas))
                assert variance <= tn(beta2-np.eye(b*b)/(b*b))+2e-10
                gamma = sum(p*z for p,z in zip(weights,alphas))
                theta = sum(p*np.kron(al,om) for p,al,om in zip(weights,alphas,corrected))
                s = a*np.linalg.eigvalsh(gamma).max()
                extra = s*np.eye(a)/a-gamma
                omega0 = np.zeros_like(corrected[0])
                omega0[:b,:b] = np.eye(b)/b
                chi = (theta+np.kron(extra,omega0))/s
                psd(chi)
                close(np.trace(chi), 1)
                # Reconstruct all POVM effects, including the added message x=0.
                effects = []
                for j in range(y):
                    e = sum(np.kron(a*p*al.T/s, b*om[j*b:(j+1)*b,j*b:(j+1)*b].T)
                            for p,al,om in zip(weights,alphas,corrected))
                    e += np.kron(a*extra.T/s, b*omega0[j*b:(j+1)*b,j*b:(j+1)*b].T)
                    psd(e)
                    effects.append(e)
                close(sum(effects), np.eye(a*b))
                # Full conditional theorem: an explicit target with exact marginals.
                rho = np.kron(np.eye(a)/a, np.kron(omega0,omega0))
                sigma = sum(p*np.kron(al,np.kron(om,om)) for p,al,om in zip(weights,alphas,ensembles))
                eta = tn(rho-sigma)
                actual = tn(np.kron(np.eye(a)/a,omega0)-chi)
                bound = min(2, (1+a)*eta+2*b*np.sqrt(eta))
                assert actual <= bound+2e-10
                min_margin = min(min_margin, bound-actual)
                cases += 1
    near_constraint = []
    base = np.eye(4)/4
    h = blockdiag([np.diag([1.,-1.])/4, np.zeros((2,2))])
    k = np.array([[0.,1.],[1.,0.]])/4
    for t in [0.1,0.01,0.001,0.0001]:
        alphas = [np.eye(2)/2+t*k, np.eye(2)/2-t*k]
        omegas = [base+t*h,base-t*h]
        repaired = [blockdiag(repair([om[:2,:2],om[2:,2:]])[0]) for om in omegas]
        chi = sum(np.kron(al,om)/2 for al,om in zip(alphas,repaired))
        sigma = sum(np.kron(al,np.kron(om,om))/2 for al,om in zip(alphas,omegas))
        rho = np.kron(np.eye(2)/2,np.kron(base,base))
        eta = tn(rho-sigma)
        error = tn(np.kron(np.eye(2)/2,base)-chi)
        bound = 3*eta+4*np.sqrt(eta)
        assert bound < 2 and error <= bound+2e-10
        min_margin = min(min_margin,bound-error)
        near_constraint.append({'perturbation':t,'eta':eta,'output_error':error,'bound':bound})
        cases += 1
    return {'cases': cases, 'max_local_error_over_bound': max_local_ratio,
            'smallest_conversion_bound_slack': min_margin,
            'small_error_cases_with_nonvacuous_bound':near_constraint,
            'checks': 'positivity, exact constraints to tolerance, total POVM normalization, second moment identity bound, conditional conversion'}


def ensemble_checks():
    max_ratio = 0.0
    cases = 0
    for d in [2,3,4]:
        for m in [2,3,7]:
            for _ in range(6):
                parts = [wishart(d) for _ in range(m)]
                total = sum(np.trace(z).real for z in parts)
                parts = [z/total for z in parts]
                sigma = sum(parts)
                rho = state(d)
                l, values, rh = np.linalg.svd(root(sigma)@root(rho))
                u = rh.conj().T@l.conj().T
                k = root(rho)@u@invroot(sigma)
                repaired = [k@z@k.conj().T for z in parts]
                close(sum(repaired),rho)
                for z in repaired:
                    psd(z)
                cost = sum(tn(x-y) for x,y in zip(parts,repaired))/2
                fidelity = values.sum()
                bound = np.sqrt(max(0,1-fidelity*fidelity))
                assert cost <= bound+2e-10
                max_ratio = max(max_ratio,cost/bound)
                cases += 1
    return {'cases': cases, 'max_error_over_purified_distance': max_ratio}


def localization_checks():
    cases = 0
    max_ratio = 0.0
    for m in [2,3,10,40]:
        for angle in [0.001,0.03,0.2]:
            def rot(t):
                return np.array([[np.cos(t),-np.sin(t)],[np.sin(t),np.cos(t)]])
            p0, p1 = np.diag([1.,0.]), np.diag([0.,1.])
            # W need not commute with Alice; conjugated effects nevertheless do.
            w = np.kron(np.eye(2),rot(angle))@(np.kron(rot(angle/2),p0)+np.kron(rot(-angle/3),p1))
            weights = RNG.dirichlet(np.ones(m),size=2).T
            e = [np.kron(np.eye(2),np.diag(z)) for z in weights]
            c = [w@z@w.conj().T for z in e]
            ve = np.vstack([root(z) for z in e])
            vc = np.vstack([root(z) for z in c])
            eps = np.linalg.norm(w-np.eye(4),2)
            close(vc,np.kron(np.eye(m),w)@ve@w.conj().T)
            assert np.linalg.norm(vc-ve,2) <= 2*eps+2e-10
            vector = RNG.normal(size=4)+1j*RNG.normal(size=4)
            vector /= np.linalg.norm(vector)
            rho = np.outer(vector,vector.conj())
            def marginal(op):
                return np.trace((op@rho).reshape(2,2,2,2),axis1=1,axis2=3)
            cost = sum(tn(marginal(x)-marginal(y)) for x,y in zip(e,c))/2
            assert cost <= min(1,2*eps)+2e-10
            max_ratio = max(max_ratio,cost/(2*eps))
            cases += 1
    return {'cases':cases, 'outcomes':[2,3,10,40], 'max_error_over_bound':max_ratio,
            'scope':'finite matrix checks of the localization lemma; infinite cone corollary is proved in the note'}


if __name__ == '__main__':
    report = {'status':'passed','seed':20512026,'exact':exact_checks(),
              'rounding_numeric':rounding_checks(), 'ensemble_perturbation_numeric':ensemble_checks(),
              'localization_numeric':localization_checks(),
              'proof_files_sha256':{name:hashlib.sha256((ROOT/name).read_bytes()).hexdigest()
                                    for name in ['piste20.md','piste51.md','verify.py']},
              'limits':'Finite checks support but do not replace the written proofs. No bibliographic originality certification.'}
    (ROOT/'verification.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({k:report[k] for k in ['status','rounding_numeric','ensemble_perturbation_numeric','localization_numeric']},indent=2))
