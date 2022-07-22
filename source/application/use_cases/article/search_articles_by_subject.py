from source.domain.use_cases.article.search_articles_by_subject_use_case import SearchArticlesBySubjectUseCase, SearchArticlesBySubjectData
from source.application.ports.repositories.article.search_articles_by_subject_repository import SearchArticlesBySubjectRepository


class SearchArticlesBySubject(SearchArticlesBySubjectUseCase):
    def __init__(self, search_articles_by_subject_repository: SearchArticlesBySubjectRepository):
        self.search_articles_by_subject_repository = search_articles_by_subject_repository

    def search_by_subject(self, data: SearchArticlesBySubjectData) -> list:
        articles = self.search_articles_by_subject_repository.search_by_subject(
            data)

        return articles
