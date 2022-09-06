import { Response } from '@/application/ports/presentation'

export default (body: object): Response => {
  return {
    statusCode: 200,
    body
  }
}
