import { Response } from '@/application/ports/presentation'
import { ApplicationError } from '@/application/errors/application-error'

export default ({
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
