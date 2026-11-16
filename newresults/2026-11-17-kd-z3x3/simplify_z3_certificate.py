from fractions import Fraction as F
import json
import math
from pathlib import Path
import numpy as np
from search_z3_counterexample import masks, certify

work = Path(__file__).resolve().parent
old = json.loads((work / "z3x3-certificate.json").read_text(encoding="utf-8"))
q = np.array([[float(F(x)) for x in row] for row in old["Q_witness"]]).ravel()
unit = min(abs(x) for x in q if abs(x) > 1e-6)
normal = np.rint(q / unit).astype(int)
all_masks = masks()
scores = all_masks @ normal
alpha = int(scores.max())
touching = all_masks[scores == alpha]
center = [F(int(x), 9 * len(touching)) for x in touching.sum(axis=0)]
epsilon = F(1, 10000)
for _ in range(20):
    state_q = [a + epsilon * int(b) for a, b in zip(center, normal)]
    try:
        result = certify([0.] * 54, [0.] * 54, work / "z3x3-simple-certificate.json",
                         state_q_override=state_q, witness_q_override=list(map(F, normal)))
        break
    except ValueError:
        epsilon /= 2
else:
    raise RuntimeError("No simplified certificate")
denominator = math.lcm(*(x.denominator for x in state_q))
integers = [int(x * denominator) for x in state_q]
result.update({"construction": "Q_state = integer_Q_numerator / Q_denominator; Q_witness = integer_witness_Q",
               "state_coeff": [], "witness_coeff": [], "epsilon": str(epsilon),
               "touching_vertices": len(touching), "Q_denominator": denominator,
               "integer_Q_numerator": [integers[i*9:(i+1)*9] for i in range(9)],
               "integer_witness_Q": normal.reshape(9,9).tolist()})
(work / "z3x3-simple-certificate.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
print(json.dumps({"denominator": denominator, "epsilon": str(epsilon), "touching_vertices": len(touching),
                  "witness_maximum": result["witness_free_maximum"], "witness_value": result["witness_state_value"],
                  "gap": result["witness_gap"], "Q_min": result["minimum_Q_state"],
                  "LDL_pivots": [float(F(x)) for x in result["LDL_positive_pivots"]],
                  "integer_Q_numerator": result["integer_Q_numerator"],
                  "integer_witness_Q": result["integer_witness_Q"]}, indent=2))
