#!/usr/bin/env python3
# """_defining languages_
# Returns:
#     _type_: flask application
# """
# from flask_babel import Babel, _
# from flask import render_template, Flask, request


# class Config:
#     """_config file for flask_bable_
#     """
#     BABEL_DEFAULT_TIMEZONE = 'UTC'
#     BABEL_DEFAULT_LOCALE = 'en'
#     LANGUAGES = ["en", "fr"]


# app = Flask(__name__)
# app.config.from_object(Config)
# babel = Babel(app)
# '''
# app configs and calls
# '''


# @babel.localeselector
# def get_locale():
#     """_Language Localisation_
#     Returns:
#         Str: prefered user language
#     """
#     try:
#         language = [i for i in Config.LANGUAGES]
#     except ValueError:
#         language = None
#     if language is not None:
#         for j in language:
#             locale = request.args.get('locale')
#             if locale == j:
#                 return locale
#     return request.accept_languages.best_match(app.config['LANGUAGES'])


# @app.route('/')
# @app.route('/templates/4-index.html')
# def index() -> str:
#     """_Page Render_
#     Returns:
#         str: Content of html
#     """
#     return render_template('4-index.html')


"""
Module 0-app
"""
from flask import Flask, render_template, request
from flask_babel import Babel


class Config(object):
    """i18n configuration"""
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route("/", strict_slashes=False)
def index():
    """didplays a basic hello world message"""
    return render_template("4-index.html")


# @babel.localeselector
def get_locale():
    """Gets best fmatch locale according to request"""
    locale = request.args.get('locale')
    if locale and locale in app.config['LANGUAGES']:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="2000")
