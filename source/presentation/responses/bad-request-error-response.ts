import { Response } from '@/application/ports/presentation'

export const BadRequestErrorResponse = ({ name, message }: Error): Response => {
  return {
    statusCode: 400,
    body: {
      name,
      message
    }
  }
}
