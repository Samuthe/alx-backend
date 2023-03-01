#!/usr/bin/env python3
"""Flask app runner
"""
from flask_babel import Babel
from flask import Flask, render_template, request


class Config:
    """Flask babel configurations"""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """Retrieves locale for web page
    """
    return request.accept_languages.best_match('LANGUAGES')


@app.route('/')
def get_index() -> str:
    """home/index"""
    return render_template('2-index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
