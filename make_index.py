#! /usr/bin/env python

import os
import argparse
import re
# May need to do "pip install mako"
from mako.template import Template

""" Build index from directory listing

make_index.py </path/to/directory> [--header <header text>] [--regex <regex>]
"""

INDEX_TEMPLATE = r"""
<html>
<body>
<h2>${header}</h2>
<p>
% for name in names:
    <li><a href="${name}">${name}<a></li>
% endfor
</p>
</body>
</html>
"""

EXCLUDED = ['index.html']


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("directory")
    parser.add_argument("--regex")
    parser.add_argument("--header")
    args = parser.parse_args()
    fnames = [fname for fname in sorted(os.listdir(args.directory))
              if fname not in EXCLUDED
              and (args.regex is None or re.search(args.regex, fname) is not None)]
    header = (args.header if args.header else os.path.basename(args.directory))
    print(Template(INDEX_TEMPLATE).render(names=fnames, header=header))


if __name__ == '__main__':
    main()
