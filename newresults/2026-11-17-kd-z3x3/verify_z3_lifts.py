"""Numerical sanity checks of the written general subquotient proof.

These checks do not replace that proof or the independent exact seed checker.
NumPy only; enumerates every pure KD input of each tested larger group.
"""
import json
from pathlib import Path
import time
import numpy as np
from verify_mathematics import elements, kd, pure_vectors


def main():
    start = time.monotonic()
    root = Path(__file__).resolve().parent
    data = json.loads((root / 'z3x3-simple-certificate.json').read_text())
    small = elements((3, 3))
    chars = np.array([[np.exp(2j*np.pi*sum(x*y for x, y in zip(g, c))/3)
                       for c in small] for g in small])
    def reconstruct(q):
        return np.array([[sum(q[i, k]*chars[i, k]*chars[j, k].conjugate()
                              for k in range(9)) for j in range(9)] for i in range(9)])
    rho = reconstruct(np.array(data['integer_Q_numerator']) / data['Q_denominator'])
    witness = reconstruct(np.array(data['integer_witness_Q']))
    results = []
    for mods in ((3, 3, 3), (9, 3)):
        large = elements(mods)
        idx, si = {g: i for i, g in enumerate(large)}, {g: i for i, g in enumerate(small)}
        for quotient in (False, True):
            e = np.zeros((len(large), 9), complex)
            if quotient:
                for i, g in enumerate(large):
                    e[i, si[g[0] % 3, g[1] % 3]] = np.sqrt(9/len(large))
            else:
                for j, (a, b) in enumerate(small):
                    g = (a*(mods[0]//3), b*(mods[1]//3)) + (0,)*(len(mods)-2)
                    e[idx[g], j] = 1
            assert np.max(np.abs(e.conj().T@e-np.eye(9))) < 1e-12
            lifted = e@rho@e.conj().T
            q = kd(lifted, mods)
            assert q.real.min() > -1e-12 and np.abs(q.imag).max() < 1e-12
            assert np.max(np.abs(e.conj().T@lifted@e-rho)) < 1e-12
            bigw = e@witness@e.conj().T + 18*(np.eye(len(large))-e@e.conj().T)
            max_free = -np.inf
            count = 0
            for psi in pure_vectors(mods):
                phi = e.conj().T@psi
                prob = np.vdot(phi, phi).real
                assert -1e-12 < prob < 1+1e-12
                if prob > 1e-12:
                    pureq = kd(np.outer(phi, phi.conj())/prob, (3, 3))
                    assert pureq.real.min() > -1e-12 and np.abs(pureq.imag).max() < 1e-12
                max_free = max(max_free, float(np.vdot(psi, bigw@psi).real))
                count += 1
            value = float(np.trace(lifted@bigw).real)
            assert max_free <= 18+1e-10 and abs(value-20.6973) < 1e-10
            results.append(dict(group=mods, map='quotient' if quotient else 'subgroup',
                                pure_inputs_checked=count, maximum_free_witness=max_free,
                                lifted_witness_value=value, tolerance=1e-10))
    output = dict(results=results, seconds=round(time.monotonic()-start, 3),
                  scope='Numerical checks only; general claims use the written proof.')
    (root/'z3x3-lifting-checks.json').write_text(json.dumps(output, indent=2), encoding='utf-8')
    print(json.dumps(output, indent=2))


if __name__ == '__main__':
    main()
