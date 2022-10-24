import { Validator } from '@/application/ports/presentation'
import {
  RequiredFieldValidation,
  ValidationComposite
} from '@/presentation/validation'
import { ArticlesEricRepository } from '@/infrastructure/data'
import {
  GetArticlesBySubject,
  CreateGraphFromArticles
} from '@/application/use-cases'
import { CreateGraphFromArticlesController } from '@/presentation/controllers'

export const createGraphFromArticlesControllerFactory = () => {
  const validators: Validator[] = []

  for (const parameter of ['subject', 'depth', 'range']) {
    validators.push(new RequiredFieldValidation(parameter))
  }

  const validator = new ValidationComposite(validators)

  const articlesRepository = new ArticlesEricRepository()

  const getArticlesBySubjectUseCase = new GetArticlesBySubject(
    articlesRepository
  )

  const createGraphFromArticlesUseCase = new CreateGraphFromArticles()

  const createGraphFromArticlesController =
    new CreateGraphFromArticlesController(
      validator,
      getArticlesBySubjectUseCase,
      createGraphFromArticlesUseCase
    )

  return createGraphFromArticlesController
}
