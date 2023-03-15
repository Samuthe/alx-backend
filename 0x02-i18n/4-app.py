#!/usr/bin/env python3
'''Module app'''

from flask import Flask, render_template, request
from flask_babel import Babel, _


class Config(object):
    '''i18n config'''
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAUL_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def index():
    '''render html page'''
    return render_template('4-index.html')


@babel.localeselector
def get_locale():
    language = None
    if language is not None:
        for x in language:
            locale = request.args.get('locale')
            if locale == x:
                return
    return request.accept_languages.best_match(app.config['LANGUAGES'])


# @babel.localeselector
# def get_locale():
#     '''gets best fmatch locale according to request'''
#     locale = request.args.get('locale')
#     if locale and locale in app.config['LANGUAGES']:
#         return locale
#     return request.accept_languages.best_match(app.config['LANGUAGES'])


# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port='5000')
