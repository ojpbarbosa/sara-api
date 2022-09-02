from abc import abstractmethod
from flask_restful import Resource, Api 
from flask import jsonify, make_response, request

from source.main.factories.controllers.article.find_article_by_subject_controller_factory import FindArticleBySubjectControllerFactory


class ArticlesSubject(Resource): 
    def get(self, subject):
        response = make_response(
                jsonify(
                    {"subject": subject}
                ),
                200,
            )
        response.headers["Content-Type"] = "application/json"
        return response