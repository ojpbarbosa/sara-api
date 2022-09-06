import { Validator } from '@/application/ports/presentation'

export class ValidationComposite implements Validator {
  constructor(private readonly validations: Validator[]) {}

  validate(data: object): Error {
    for (const validation of this.validations) {
      const error = validation.validate(data)

      if (error) {
        return error
      }
    }
  }
}
