export class MalformattedParameterError extends Error {
  constructor(parameter: string) {
    super(`Malformatted ${parameter} parameter`)
    this.name = 'MalformattedParameterError'
  }
}
