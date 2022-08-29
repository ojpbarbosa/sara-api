from abc import ABC, abstractmethod

from source.domain.entities.article import Article
from source.application.use_cases.article.search_articles_by_subject import SearchArticlesBySubject
from source.infrastructure.repositories.article.article_default_repository import ArticleDefaultRepository
from source.presentation.controllers.article.find_by_subject_controller import FindArticlesBySubjectController

class FindArticleBySubjectControllerFactory(ABC):
  @abstractmethod
  def find_article_by_subject():
      pass