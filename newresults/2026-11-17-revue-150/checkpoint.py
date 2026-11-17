"""Local checkpoint only, independent of Git publication permissions.

This replaced the earlier commit helper during the user's no-commit period.
Even after renewed publication authorization, this validator never invokes Git.
The former numeric argument remains an optional coverage check.
"""
from pathlib import Path
import sys
import campaign


if __name__ == '__main__':
    reviews = campaign.read(Path(__file__).parent/'reviews.json')
    if len(sys.argv) > 1:
        expected = int(sys.argv[1])
        assert 1 <= expected <= 150
        assert all(str(i) in reviews for i in range(1,expected+1))
    campaign.validate(complete=len(reviews)==150)
    print('Local notes validated. No Git operation was run.')
