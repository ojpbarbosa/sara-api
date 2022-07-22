from abc import ABC, abstractmethod

from source.domain.use_cases.article.search_articles_by_subject_use_case import SearchArticlesBySubjectData


class SearchArticlesBySubjectRepository(ABC):
    @abstractmethod
    def search_by_subject(self, data: SearchArticlesBySubjectData) -> list:
        pass
