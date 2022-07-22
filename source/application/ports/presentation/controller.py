from abc import ABC, abstractmethod

from request import Request
from response import Response


class Controller(ABC):
    @abstractmethod
    def handle(self, request: Request) -> Response:
        pass
