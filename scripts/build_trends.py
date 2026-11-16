#!/usr/bin/env python3
"""Build app/data/trends-data.js for the draft "Quantum trends" page.

Input: the topic map of the quant-ph corpus in the jpbruneton/oqmresearch
repository (abstracts/map/clusters.json and papers-map.jsonl.gz). Usage:

    python3 scripts/build_trends.py MAP_DIR SOURCE_COMMIT

Standard library only. Hand-written English labels for the topics shown on the
page live in this file; everything numeric comes from the map.
"""
import collections
import gzip
import json
import os
import sys

MAP_DIR, COMMIT = sys.argv[1], sys.argv[2]
OUT = os.path.join(os.path.dirname(__file__), "..", "app", "data", "trends-data.js")

ZONES = {
    0: "Algorithms, complexity and software",
    1: "Quantum matter and many-body dynamics",
    2: "Foundations, fields and gravity",
    3: "Quantum optics and emitters",
    4: "Entanglement, nonlocality and information",
    5: "Atoms, ions and defects (Rydberg, NV)",
    6: "Quantum machine learning",
    7: "Error correction and fault tolerance",
    8: "Superconducting circuits and solid-state spins",
    9: "Cryptography and networks",
    10: "Thermodynamics and open systems",
    11: "Quantum chemistry and variational methods",
    12: "Optimization (QAOA, annealing)",
    13: "Metrology and Fisher information",
    14: "Tensor networks and Monte Carlo",
    15: "Quantum walks and graph states",
    16: "Lattice gauge theories",
    17: "Black holes",
    18: "Quantum Mpemba effect",
    19: "Boson sampling",
}

RISING = {
    56: "Quantum query complexity and query lower bounds",
    115: "Fault-tolerant compilation and resource estimates (lattice surgery)",
    21: "qLDPC and other sparse quantum codes",
    23: "Gibbs sampling, quantum Markov semigroups and Hamiltonian learning",
    38: "Decoders for quantum error correction",
    67: "Quantum geometry (quantum geometric tensor, quantum metric)",
    18: "Quantum channel capacities",
    119: "Phase-space methods and Wigner functions",
    63: "Quantum batteries",
    113: "Strong-to-weak spontaneous symmetry breaking",
    112: "Lie superalgebras and superintegrable systems",
    92: "Graph states and local complementation",
    122: "Quantum Mpemba effect",
    0: "Quantum Fisher information and multiparameter metrology",
}

DECLINING = {
    130: "Time crystals",
    26: "Quantum education, workforce and ecosystem",
    132: "Emitters in hexagonal boron nitride",
    117: "Majorana zero modes and braiding",
    77: "Bose–Einstein condensates",
    33: "Gravity and the quantum nature of gravitation",
    5: "Generic quantum machine learning",
    71: "Hidden subgroup problem and topological data analysis",
    58: "Semiconductor quantum dots (InAs, colloidal)",
    80: "Casimir effect and vacuum energy",
}

# Mostly theoretical topics with no catalogue entry or proposal nearby in the map.
GAPS = {
    13: "Tensor networks and matrix product states",
    28: "Neural quantum states and quantum Monte Carlo",
    25: "Topological phases and edge states",
    89: "Measurement-induced phase transitions",
    61: "Non-Hermitian skin effect",
    57: "Exceptional points",
    67: "Quantum geometry",
    48: "Magic-state distillation and cultivation",
    36: "Product formulas and Trotter error",
    111: "Quantum signal processing and block encodings",
    62: "Quantum walks",
    122: "Quantum Mpemba effect",
    115: "Fault-tolerant compilation and resource estimates (lattice surgery)",
}

FLAGGED = {
    118: ("Quantum Darwinism and redundant records",
          "Jumps from 5 papers in year 1 to 123 in year 2 with very homogeneous wording: probably a series of deposits from a single source. Excluded from the rankings until it is checked."),
    140: ("Comments and replies",
          "Grouped by form (“Comment on…”, “Reply to…”) rather than by subject."),
}

data = json.load(open(os.path.join(MAP_DIR, "clusters.json")))
meta = data["meta"]
clusters = {c["id"]: c for c in data["clusters"]}
papers = [json.loads(line) for line in gzip.open(os.path.join(MAP_DIR, "papers-map.jsonl.gz"))]

# Monthly counts from the arXiv identifier (YYMM). The first (2411) and last
# (2611) windows are partial and left out of the monthly series.
months = sorted({p["arxiv_id"][:4] for p in papers})[1:-1]
total_by_month = collections.Counter(p["arxiv_id"][:4] for p in papers)
by_cluster_month = collections.Counter((p["cluster"], p["arxiv_id"][:4]) for p in papers)


def entries(c):
    return [{"id": o["id"], "kind": o["kind"], "title": o["title"]} for o in c["oqm"]]


def topic(cid, label):
    c = clusters[cid]
    return {
        "cluster": cid,
        "label": label,
        "zone": c["group"],
        "terms": c["terms"][:6],
        "year1": c["year1"],
        "year2": c["year2"],
        "growth": c["growth"],
        "theoryShare": round(c["theory_share"], 2) if c.get("theory_share") is not None else None,
        "openKeywordPapers": c["open_keyword_papers"],
        "monthly": [by_cluster_month[(cid, m)] for m in months],
        "entries": entries(c),
        "examples": [{"id": r["id"], "title": r["title"]} for r in c["representatives"][:3]],
    }


zones = []
for g in data["groups"]:
    cs = [c for c in data["clusters"] if c["group"] == g["id"] and c["id"] not in (118,)]
    y1 = sum(c["year1"] for c in cs)
    y2 = sum(c["year2"] for c in cs)
    zones.append({
        "zone": g["id"],
        "label": ZONES[g["id"]],
        "papers": y1 + y2,
        "year1": y1,
        "year2": y2,
        "growth": round((y2 / meta["year2"]) / (y1 / meta["year1"]), 2),
        "topics": len(cs),
        "entries": sum(1 for c in cs for o in c["oqm"] if o["kind"] == "catalogue"),
        "proposals": sum(1 for c in cs for o in c["oqm"] if o["kind"] == "proposal"),
    })
zones.sort(key=lambda z: -z["papers"])

out = {
    "source": {
        "repo": "jpbruneton/oqmresearch",
        "path": "abstracts/map",
        "commit": COMMIT,
        "builtOn": "2026-11-15",
    },
    "meta": {
        "papers": meta["papers"],
        "split": meta["split"],
        "year1": meta["year1"],
        "year2": meta["year2"],
        "volumeGrowth": round(meta["year2"] / meta["year1"], 2),
        "topics": len(clusters),
        "zones": len(data["groups"]),
        "catalogueItems": meta["oqm_entries"],
        "months": months,
        "monthlyTotal": [total_by_month[m] for m in months],
    },
    "rising": sorted((topic(i, l) for i, l in RISING.items()), key=lambda t: -t["growth"]),
    "declining": sorted((topic(i, l) for i, l in DECLINING.items()), key=lambda t: t["growth"]),
    "gaps": sorted((topic(i, l) for i, l in GAPS.items()), key=lambda t: -(t["year1"] + t["year2"])),
    "flagged": [dict(topic(i, l), note=n) for i, (l, n) in FLAGGED.items()],
    "zones": zones,
}
for t in out["gaps"]:
    assert not t["entries"], t["label"]
with open(OUT, "w") as f:
    f.write("// Generated by scripts/build_trends.py from the oqmresearch topic map. Do not edit by hand.\n")
    f.write("export const TRENDS = ")
    json.dump(out, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print(OUT, len(out["rising"]), len(out["declining"]), len(out["gaps"]))
