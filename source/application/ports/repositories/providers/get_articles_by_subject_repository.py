from abc import ABC, abstractclassmethod

from source.domain.use_cases.providers.get_articles_by_subject_use_case import GetArticlesBySubjectData

class GetArticlesBySubjectUseCase(ABC):
    @abstractclassmethod
    def get_by_subject(self, data: GetArticlesBySubjectData) -> list:
        pass