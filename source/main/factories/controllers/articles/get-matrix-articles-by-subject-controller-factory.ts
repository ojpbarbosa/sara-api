import {
  RequiredFieldValidation,
  ValidationComposite
} from '@/presentation/validation'
import { ArticlesEricRepository } from '@/infrastructure/data/articles/eric'
import { GetMatrixArticlesBySubject } from '@/application/use-cases'
import { GetMatrixArticlesBySubjectController } from '@/presentation/controllers'

export const getMatrixArticlesBySubjectControllerFactory = () => {
  const validator = new ValidationComposite([
    new RequiredFieldValidation('subject')
  ])

  const articlesRepository = new ArticlesEricRepository()

  const getMatrixArticlesBySubjectUseCase = new GetMatrixArticlesBySubject(
    articlesRepository
  )

  const getMatrixArticlesBySubjectController =
    new GetMatrixArticlesBySubjectController(
      validator,
      getMatrixArticlesBySubjectUseCase
    )

  return getMatrixArticlesBySubjectController
}
