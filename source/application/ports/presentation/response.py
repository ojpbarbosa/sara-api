from abc import ABC


class Response(ABC):
    status_code: int
    body: dict
