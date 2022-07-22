from abc import ABC


class Request(ABC):
    headers: dict
    body: dict
    parameters: dict
