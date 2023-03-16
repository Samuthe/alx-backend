#!/usr/bin/env python3
'''my module 5'''
from flask import Flask, render_template, request
from flask_babel import Babel, _

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config:
    '''config file'''
    BABEL_DEFAULT_TIMEZONE = 'UTC'
    BABEL_DEFAULT_LOCALE = 'en'
    LANGUAGE = ['en', 'fr']


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def index():
    '''displays render templates from html'''
    return render_template('5-index.html')


@babel.localeselector
def get_locale():
    '''localize language'''
    try:
        language = [i for i in Config.LANGUAGES]
    except ValueError:
        language = None
        if language is not None:
            for j in language:
                locale = request.args.get('locale')
                if locale == j:
                    return locale
            return request.accept_languages.best_match(app.config['LANGUAGES'])
