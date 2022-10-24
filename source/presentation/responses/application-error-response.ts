import { Response } from '@/application/ports/presentation'
import { ApplicationError } from '@/application/errors/application-error'

export const ApplicationErrorResponse = ({
  statusCode,
  name,
  message,
  messages
}: ApplicationError): Response => {
  return {
    statusCode,
    body: {
      name,
      message,
      messages
    }
  }
}
