"""Frozen inputs and explicit human/assistant review ledger, not an auto-reviewer.

init snapshots the 150 original retrieval pairs. show prints unread abstracts
once per batch using prior logged paper IDs. record accepts deliberately authored
verdicts, validates coverage and renders the index. It never invents verdicts.
"""
import collections
import hashlib
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
WORK = ROOT.parents[1]/'tmp/discovery-exhaustive-2026-11-16'
DECISIONS = {'ecartee', 'connue', 'non-conclue', 'resultat', 'en-cours'}


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def write(path, value):
    path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')


def init():
    if (ROOT/'input.json').exists():
        raise ValueError('Snapshot already exists')
    original = read(WORK/'proposals-initial.json')
    pairs, papers = [], {}
    for rank, pair in enumerate(original['pairs'],1):
        packet = read(WORK/'packets'/pair['id']/'packet.json')
        assert packet['pair']['id'] == pair['id']
        pairs.append(dict(rank=rank,id=pair['id'],papers=pair['papers'],score=pair['score'],
                          families=pair['independent_cue_families']))
        for p in packet['papers']:
            papers[p['id']] = {k:p[k] for k in ('id','title','abstract','annotation','url','decision')}
            papers[p['id']]['abstract_sha256'] = hashlib.sha256((p['title']+'\n\n'+p['abstract']).encode()).hexdigest()
    assert len(pairs) == 150 and len({p['id'] for p in pairs}) == 150
    write(ROOT/'input.json',dict(source_epoch=original['index_epoch'],
          source_sha256=hashlib.sha256((WORK/'proposals-initial.json').read_bytes()).hexdigest(),
          pairs=pairs,papers=papers))
    write(ROOT/'reviews.json',{})
    render()


def show(start, end):
    data, reviews = read(ROOT/'input.json'), read(ROOT/'reviews.json')
    seen = {pid for p in data['pairs'] if str(p['rank']) in reviews for pid in p['papers']}
    for pair in data['pairs'][start-1:end]:
        print(f"\n=== {pair['rank']} {pair['id']} ({pair['score']}) {pair['families']} ===")
        for pid in pair['papers']:
            p = data['papers'][pid]
            print(pid, p['title'])
            if pid in seen:
                print('[Abstract already printed in this review sequence]')
            else:
                print(p['abstract'])
                seen.add(pid)


def record(path):
    entries, data = read(path), read(ROOT/'input.json')
    current = read(ROOT/'reviews.json')
    for entry in entries:
        rank = entry['rank']
        assert 1 <= rank <= 150 and entry['decision'] in DECISIONS
        assert len(entry['rationale']) >= 80 and entry['reading'] in ('abstracts','targeted-fulltext')
        assert len(entry['references']) >= 2
        pair = data['pairs'][rank-1]
        assert all(any(pid in ref for ref in entry['references']) for pid in pair['papers'])
        if entry['decision'] == 'resultat':
            assert entry.get('note') and (ROOT/entry['note']).exists()
        current[str(rank)] = entry
    write(ROOT/'reviews.json',current)
    render()


def render():
    data, reviews = read(ROOT/'input.json'), read(ROOT/'reviews.json')
    counts = collections.Counter(v['decision'] for v in reviews.values())
    lines = ['# Revue individuelle des 150 rapprochements', '',
             'Revue séquentielle avec approfondissement au fil de l’eau. Les scores sont des priorités de lecture.', '',
             f"**{len(reviews)}/150 pistes consignées**, dont {counts.get('en-cours',0)} encore en cours. "
             f"{len(data['papers'])} articles distincts dans l’instantané.", '',
             'Les rejets au niveau des résumés ne certifient ni incompatibilité universelle ni absence de résultat nouveau.', '',
             '| Rang | Articles | Décision | Lecture |', '|---:|---|---|---|']
    detail = ['# Verdicts individuels','']
    for pair in data['pairs']:
        rank = str(pair['rank'])
        e = reviews.get(rank)
        decision = e['decision'] if e else 'a-examiner'
        reading = e['reading'] if e else '—'
        links = ' / '.join(f"[{pid}]({data['papers'][pid]['url']})" for pid in pair['papers'])
        lines.append(f"| [{rank}](VERDICTS.md#piste-{rank}) | {links} | {decision} | {reading} |")
        detail += [f"## Piste {rank}", '', pair['id'], '',
                   ' / '.join(data['papers'][pid]['title'] for pid in pair['papers']), '']
        if not e:
            detail += ['À examiner.','']
            continue
        detail += [f"**{decision}** — lecture : {reading}.",'',e['rationale'],'']
        if e.get('next_step'):
            detail += ['Suite : '+e['next_step'],'']
        if e.get('note'):
            detail += [f"[Note de recherche]({e['note']})",'']
        detail += ['Sources : '+', '.join(f'[{i+1}]({ref})' for i,ref in enumerate(e['references'])),'']
    (ROOT/'INDEX.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
    (ROOT/'VERDICTS.md').write_text('\n'.join(detail)+'\n',encoding='utf-8')
    print(dict(reviewed=len(reviews),decisions=dict(counts)))


def validate():
    data, reviews = read(ROOT/'input.json'), read(ROOT/'reviews.json')
    assert len(data['pairs']) == 150
    for rank,e in reviews.items():
        assert rank == str(e['rank']) and e['decision'] in DECISIONS
        assert e['rationale'] and len(e['references']) >= 2
        if e.get('note'):
            assert (ROOT/e['note']).is_file()
    print(f'Ledger valid: {len(reviews)}/150 entries; no automatic scientific verdicts.')


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    cmd = sys.argv[1]
    if cmd == 'init': init()
    elif cmd == 'show': show(int(sys.argv[2]),int(sys.argv[3]))
    elif cmd == 'record': record(Path(sys.argv[2]))
    elif cmd == 'render': render()
    elif cmd == 'validate': validate()
    else: raise ValueError(cmd)
