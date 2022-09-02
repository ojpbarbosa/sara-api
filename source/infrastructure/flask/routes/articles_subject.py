from abc import abstractmethod
from flask_restful import Resource, Api, reqparse
from flask import jsonify, make_response, request

from source.main.factories.controllers.article.find_article_by_subject_controller_factory import FindArticleBySubjectControllerFactory


class ArticlesSubject(Resource): 
    def get(self):
        args = reqparse.RequestParser()
        args.add_argument('subject')
        data = args.parse_args()
        response = make_response(
                jsonify(
                    {"subject": data}
                ),
                200,
            )
        response.headers["Content-Type"] = "application/json"
        return response