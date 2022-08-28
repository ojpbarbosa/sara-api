from abc import abstractmethod
from flask_restful import Resource, Api # install flask-restful

class ArticlesSubject(Resource): 
    @abstractmethod
    def get(self):
        pass