export class MissingParameterError extends Error {
  constructor(parameter: string) {
    super(`Missing ${parameter} parameter`)
    this.name = 'MissingParameterError'
  }
}
