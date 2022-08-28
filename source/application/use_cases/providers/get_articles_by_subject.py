from source.domain.use_cases.providers.get_articles_by_subject_use_case import GetArticlesBySubjectUseCase, GetArticlesBySubjectData
from source.application.ports.repositories.providers.get_articles_by_subject_repository import GetArticlesBySubjectRepository

class GetArticlesBySubject(GetArticlesBySubjectUseCase):
    def __init__(self, get_articles_by_subject_repository: GetArticlesBySubjectRepository):
        self.get_articles_by_subject_repository = get_articles_by_subject_repository

    def get_by_subject(self, data: GetArticlesBySubjectData) -> list:
        articles = self.get_articles_by_subject_repository.get_by_subject(
            data)

        return articles