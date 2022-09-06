import { ApplicationError } from './application-error'

export class ForbiddenError extends ApplicationError {
  name = 'ForbiddenError'
  statusCode = 403
}
