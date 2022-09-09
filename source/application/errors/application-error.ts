export type ErrorData = {
  name?: string
  message?: string
  statusCode?: number
  messages?: string[]
  stack?: Error['stack']
}

export class ApplicationError extends Error {
  public statusCode = 500
  public messages = []

  constructor(message?: string) {
    super(message)

    this.name = 'ApplicationError'
    this.message = message || this.name
    this.messages.push(this.message)
  }
}
