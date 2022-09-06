export interface Validator {
  validate(data: object): Error
}
