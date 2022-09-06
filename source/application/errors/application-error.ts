export type ErrorData = {
  name?: string
  message?: string
  statusCode?: number
  messages?: string[]
  stack?: Error['stack']
}

export class ApplicationError extends Error {
  public statusCode = 500
  public messages: string[] = []

  constructor(message?: string) {
    super(message)
    this.message = message || this.name
    this.name = 'ApplicationError'
    this.messages.push(this.message)
  }
}
