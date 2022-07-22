from abc import ABC
from datetime import datetime

from category import Category


class Article(ABC):
    source: str
    url: str
    title: str
    summary: str
    body: str
    published_at: datetime
    categories: list(Category)
