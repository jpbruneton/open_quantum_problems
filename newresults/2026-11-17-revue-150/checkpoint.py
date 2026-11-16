"""Validate and commit ONLY this research campaign, never push.

Run explicitly at each ten-verdict checkpoint. Other worktree/index changes
are neither committed nor reset. Repository-required tests/build run first.
"""
import json
from pathlib import Path
import shutil
import subprocess
import sys

campaign = Path(__file__).resolve().parent
repo = campaign.parents[1]
expected = int(sys.argv[1])
reviews = json.loads((campaign/'reviews.json').read_text(encoding='utf-8'))
assert all(str(i) in reviews for i in range(1,expected+1))
assert expected % 10 == 0 and 10 <= expected <= 150
allowed = campaign.relative_to(repo).as_posix()
logs = repo/'tmp/discovery-review-checkpoints'
logs.mkdir(parents=True,exist_ok=True)

def run(args, logname=None):
    result = subprocess.run(args,cwd=repo,text=True,encoding='utf-8',errors='replace',capture_output=True)
    output = result.stdout+result.stderr
    if logname:
        (logs/logname).write_text(output,encoding='utf-8')
    if result.returncode:
        print(output[-6000:])
        raise SystemExit(result.returncode)
    return output

run([sys.executable,'-B',str(campaign/'campaign.py'),'validate'])
run([shutil.which('npm.cmd') or 'npm','test'],f'{expected:03}-test.log')
run([shutil.which('npm.cmd') or 'npm','run','build'],f'{expected:03}-build.log')
git = shutil.which('git') or 'git'
run([git,'diff','--check','--',allowed])
run([git,'add','--',allowed])
message = f'Review discovery leads {max(1,expected-9):03}-{expected:03} with individual verdicts'
print(run([git,'commit','--only','-m',message,'--',allowed]))
print(f'Checkpoint {expected}: campaign validation, npm test and npm build passed; no push.')
