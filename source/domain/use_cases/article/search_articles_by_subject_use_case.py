from abc import ABC, abstractmethod


class SearchArticlesBySubjectData(ABC):
    subject: str
    depth: int


class SearchArticlesBySubjectUseCase(ABC):
    @abstractmethod
    def search_by_subject(self, data: SearchArticlesBySubjectData) -> list:
        pass
