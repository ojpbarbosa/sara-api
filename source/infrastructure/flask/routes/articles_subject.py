from abc import abstractmethod
from flask_restful import Resource, Api 

from source.main.factories.controllers.article.find_article_by_subject_controller_factory import FindArticleBySubjectControllerFactory


class ArticlesSubject(Resource): 
    @abstractmethod
    def get(self):
        pass