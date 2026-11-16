"""Record the checked draft and hash the persistent research files."""
import datetime
import hashlib
import json
from pathlib import Path
from pypdf import PdfReader

from verify_paper_data import check


root = Path(__file__).resolve().parent
check()
pdf = root/'kd-z3x3.pdf'
reader = PdfReader(pdf)
assert len(reader.pages) == 6
assert all(len(page.extract_text()) > 300 for page in reader.pages)
log = (root/'kd-z3x3.log').read_text(encoding='utf-8',errors='replace')
assert not any(term in log for term in ('undefined references', 'undefined on input',
                                       'Overfull', 'invalid in math mode'))
data = dict(checked_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),
            pdf_pages=6, exact_manuscript_data_check='pass',
            certificate_unit_tests='5 passed; unittest run recorded in session',
            latex_compilation='success: built-in compiler and local pdfLaTeX',
            undefined_references=False, overfull_boxes=False,
            visual_review='All six pages inspected; bibliography grouped on final page.',
            novelty='not-found-in-documented-search; priority unconfirmed',
            public_submission=False)
(root/'validation.json').write_text(json.dumps(data,indent=2),encoding='utf-8')
manifest = {p.name: hashlib.sha256(p.read_bytes()).hexdigest()
            for p in sorted(root.iterdir()) if p.is_file()
            and p.suffix not in ('.aux','.log','.out') and p.name != 'file-manifest.json'}
(root/'file-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print(json.dumps(dict(persistent_files=len(manifest),pdf_bytes=pdf.stat().st_size,
                     validation=data),indent=2))
