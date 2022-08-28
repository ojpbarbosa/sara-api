from flask import Flask, request, jsonify
from flask_restful import Api # install flask-restful

from source.infrastructure.flask.routes.articles_subject import ArticlesSubject

app = Flask(__name__)
api = Api(app)

api.add_resource(ArticlesSubject, '/articles/subject/<string:subject>')

if __name__ == '__main__':
    app.run()