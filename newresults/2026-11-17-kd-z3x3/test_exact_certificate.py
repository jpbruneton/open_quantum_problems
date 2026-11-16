import copy
import json
from pathlib import Path
import tempfile
import unittest

from verify_z3_certificate import verify


class CertificateTests(unittest.TestCase):
    def setUp(self):
        self.original = Path(__file__).resolve().parent / "z3x3-simple-certificate.json"
        self.data = json.loads(self.original.read_text(encoding="utf-8"))

    def check_modified(self, value):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "certificate.json"
            path.write_text(json.dumps(value), encoding="utf-8")
            return verify(path)

    def test_independent_exact_certificate(self):
        result = verify(self.original)
        self.assertEqual(result["pure_KD_states_rebuilt"], 54)
        self.assertEqual(result["strict_gap"], "26973/10000")

    def test_wrong_trace_is_rejected(self):
        self.data["integer_Q_numerator"][0][0] += 1
        with self.assertRaises(AssertionError):
            self.check_modified(self.data)

    def test_classical_maximally_mixed_state_is_rejected_as_counterexample(self):
        self.data["Q_denominator"] = 81
        self.data["integer_Q_numerator"] = [[1] * 9 for _ in range(9)]
        with self.assertRaises(AssertionError):
            self.check_modified(self.data)

    def test_zero_witness_is_rejected(self):
        self.data["integer_witness_Q"] = [[0] * 9 for _ in range(9)]
        with self.assertRaises(AssertionError):
            self.check_modified(self.data)

    def test_reported_factorization_is_not_trusted(self):
        self.data["LDL_positive_pivots"] = ["fake"]
        result = self.check_modified(self.data)
        self.assertEqual(result["positive_LDL_pivots_checked"], 18)


if __name__ == "__main__":
    unittest.main()
