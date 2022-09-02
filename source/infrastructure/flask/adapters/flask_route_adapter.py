from flask import Request, Response

from source.application.ports.presentation.controller import Controller

class FlaskRouteAdapter:
    def __init__(self, controller: Controller):
        self.controller = controller

    def route(self, request: Request, response: Response):
        
         response = make_response(
                jsonify(
                    {"subject": subject}
                ),
                200,
            )
        response.headers["Content-Type"] = "application/json"
        return response
        return self.controller.handle(request)