from flask import Request, Response

from source.application.ports.presentation.controller import Controller

class FlaskRouteAdapter:
    def __init__(self, controller: Controller):
        self.controller = controller

    def route(self, request: Request, response: Response):
        return self.controller.handle(request)