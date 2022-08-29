from domain.use_cases.article.search_articles_by_subject_use_case import SearchArticlesBySubjectUseCase
from application.ports.presentation.request import Request

class FindArticlesBySubjectController:
  def __init__(self, find_articles_by_subject_use_case: SearchArticlesBySubjectUseCase):
    self.find_articles_by_subject_use_case = find_articles_by_subject_use_case

  def handle(request: Request):
    pass