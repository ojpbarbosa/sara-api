import { Controller } from '@/application/ports/presentation'
import { Request as HttpRequest, Response as HttpResponse } from 'express'

export const adaptController = (controller: Controller) => {
  return async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    const response = await controller.handle({
      headers: httpRequest.headers,
      body: httpRequest.body,
      parameters: httpRequest.params,
      collaboratorId: httpRequest.headers.collaboratorId as string
    })

    const { statusCode, body } = response

    if (statusCode >= 200 && statusCode < 300) {
      httpResponse.status(statusCode).json(body)
    } else {
      httpResponse.status(statusCode).json({
        ...body
      })
    }
  }
}
