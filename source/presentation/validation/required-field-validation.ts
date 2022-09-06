import { Validator } from '@/application/ports/presentation'
import { MissingParameterError } from '@/presentation/errors'

export class RequiredFieldValidation implements Validator {
  constructor(private readonly field: string) {}

  validate(data: object): Error {
    if (!data[this.field]) {
      return new MissingParameterError(this.field)
    }
  }
}
