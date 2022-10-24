import { Response } from '@/application/ports/presentation'

export const NoContentResponse = (body: object): Response => {
  return {
    statusCode: 204,
    body
  }
}
