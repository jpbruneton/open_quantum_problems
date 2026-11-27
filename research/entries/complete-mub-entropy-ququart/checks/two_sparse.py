"""Numerical cross-check of the two-component theorem and the local bound in d = 5.

Independent of the proofs in the manuscript subsection "Two-component states
and local minimality". Run from the repository root:
    python research/entries/complete-mub-entropy-ququart/checks/two_sparse.py
Writes data/two_sparse.json next to this entry's other records.
"""
import itertools
import json
import math
from pathlib import Path

import numpy as np


def entropies(probs):
    p = np.maximum(probs, 1e-300)
    return -(p*np.log2(p)).sum(axis=-1)


def probabilities(bases, vector):
    return abs(bases.conj().transpose(0,2,1) @ vector)**2


def main():
    x = np.arange(5)
    w = np.exp(2j*np.pi/5)
    fourier = w**np.outer(x,x)/math.sqrt(5)
    bases = np.array([np.eye(5)] + [w**(a*x[:,None]**2)*fourier for a in x])
    q = (5+math.sqrt(5))/10
    target = 6+5*entropies(np.array([q,1-q]))
    rows = []
    # Independent phase conventions in each basis can permute the five equalities.
    for b in bases:
        for j,k in itertools.combinations(x,2):
            for s in x:
                rows.append((b[:,j]-w**s*b[:,k])/math.sqrt(2))
    rays = np.array(rows)
    overlap = abs(rays.conj() @ rays.T)
    np.fill_diagonal(overlap,0)
    assert overlap.max() < 1-1e-8
    for vector in rays:
        probs = probabilities(bases,vector)
        assert np.isclose(entropies(probs).sum(),target,atol=2e-12,rtol=0)
        mask = probs < 1e-15
        z = bases.transpose(0,2,1)[mask]
        assert np.allclose(np.linalg.eigvalsh(z.T @ z.conj()),[0,1,2,2,3])
        weights = np.zeros_like(probs)
        weights[~mask] = -(np.log(probs[~mask])+1)/math.log(2)
        gradient = np.einsum("bxi,bi,byi->xy",bases,weights,bases.conj())
        grad_v = gradient @ vector
        assert np.linalg.norm(grad_v-np.vdot(vector,grad_v)*vector)<1e-11
    rng = np.random.default_rng(20261127)
    for _ in range(2000):
        b = bases[rng.integers(6)]
        j,k = rng.choice(5, size=2, replace=False)
        p,phase = rng.random(),2*math.pi*rng.random()
        v = math.sqrt(p)*b[:,j]+math.sqrt(1-p)*np.exp(1j*phase)*b[:,k]
        assert entropies(probabilities(bases,v)).sum() >= target-2e-12
    record = {"rays": len(rays), "entropy_bits": round(float(target), 12),
              "zero_outcome_spectrum": [0, 1, 2, 2, 3], "gradient_alignment_checked": len(rays),
              "random_two_component_states": 2000, "seed": 20261127}
    out = Path(__file__).resolve().parent.parent / "data" / "two_sparse.json"
    out.write_text(json.dumps(record, indent=2) + "\n", encoding="utf-8")
    print(f"300 distinct rays; entropy {target:.12f}; 300 frames and gradients; 2000 sparse states; wrote {out.name}")


if __name__ == "__main__":
    main()
