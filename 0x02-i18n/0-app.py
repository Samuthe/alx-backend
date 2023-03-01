#!/usr/bin/env python3

from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
app.url_map.strict_slashes = False


@app.route('/')
def get_index() -> str:
    """returns home/index page
   """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


babel = Babel(app)
