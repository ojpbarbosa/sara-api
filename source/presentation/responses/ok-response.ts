import { Response } from '@/application/ports/presentation'

export const OkResponse = (body: object): Response => {
  return {
    statusCode: 200,
    body
  }
}
