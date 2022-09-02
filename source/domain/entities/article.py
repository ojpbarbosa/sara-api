from abc import ABC
from datetime import datetime

from source.domain.entities.category import Category


class Article():
    source: str
    url: str
    title: str
    summary: str
    body: str
    published_at: datetime
    #categories: list(Category)
