from abc import ABC, abstractmethod

from source.domain.entities.article import Article


class SearchArticleBySubjectData(ABC):
    subject: str
    depth: int


class SearchArticleBySubjectUseCase(ABC):
    @abstractmethod
    def search_by_subject(self, data: SearchArticleBySubjectData) -> Article:
        pass
