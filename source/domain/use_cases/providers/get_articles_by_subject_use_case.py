from abc import ABC, abstractclassmethod

class GetArticlesBySubjectData(ABC):
    subject: str
    depth: int

class GetArticlesBySubjectUseCase(ABC):
    @abstractclassmethod
    def get_by_subject(self, data: GetArticlesBySubjectData) -> list:
        pass