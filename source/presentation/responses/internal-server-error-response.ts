import { Response } from '@/application/ports/presentation'

export const InternalServerErrorResponse = ({
  name,
  message
}: Error): Response => {
  return {
    statusCode: 500,
    body: {
      name,
      message
    }
  }
}
