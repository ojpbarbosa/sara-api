import { Request, Response, NextFunction as Next } from 'express'

export const content = (
  request: Request,
  response: Response,
  next: Next
): void => {
  response.type('json')

  next()
}
