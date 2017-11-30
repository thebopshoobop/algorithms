# Algorithms

Implementations of common algorithms written in Python (tested on 3.5.3) and
JavaScript (tested on Node.js 8.9.1).

## Tests

### Python tests are written with [pytest](https://docs.pytest.org/en/latest/)

If you have pytest installed globally, you can simply invoke it to run the
python tests `pytest`. Likewise, if you have
[Setuptools](https://pypi.python.org/pypi/setuptools) installed (available in
most Linux distros as python-setuptools), you can run `python setup.py test`.

### JavaScript tests are written with [Jasmine](https://jasmine.github.io/)

If you have Jasmine installed globally (`npm install --global jasmine`), you can
just invoke it: `jasmine`. Otherwise, you can install the package locally (`npm
install jasmine`) and then run `npm test`.
