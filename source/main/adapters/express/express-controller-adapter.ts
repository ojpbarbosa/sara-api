import { Controller } from '@/application/ports/presentation'
import { Request as HttpRequest, Response as HttpResponse } from 'express'

export const adaptController = (controller: Controller) => {
  return async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    const response = await controller.handle({
      headers: httpRequest.headers,
      body: httpRequest.body,
      parameters: httpRequest.params,
      query: httpRequest.query
    })

    const { statusCode, body } = response

    httpResponse.status(statusCode).json(body)
  }
}
