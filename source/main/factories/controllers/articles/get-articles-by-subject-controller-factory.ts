import { Validator } from '@/application/ports/presentation'
import {
  RequiredFieldValidation,
  ValidationComposite
} from '@/presentation/validation'
import { ArticlesEricRepository } from '@/infrastructure/data/articles/eric'
import { GetArticlesBySubject } from '@/application/use-cases'
import { GetArticlesBySubjectController } from '@/presentation/controllers'

export const getArticlesBySubjectControllerFactory = () => {
  const validators: Validator[] = []

  for (const parameter of ['subject', 'depth', 'range']) {
    validators.push(new RequiredFieldValidation(parameter))
  }

  const validator = new ValidationComposite(validators)

  const articlesRepository = new ArticlesEricRepository()

  const getArticlesBySubjectUseCase = new GetArticlesBySubject(
    articlesRepository
  )

  const getArticlesBySubjectController = new GetArticlesBySubjectController(
    validator,
    getArticlesBySubjectUseCase
  )

  return getArticlesBySubjectController
}
