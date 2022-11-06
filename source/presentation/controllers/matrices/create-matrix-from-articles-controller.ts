import {
  Controller,
  Validator,
  Request,
  Response
} from '@/application/ports/presentation'
import { GetMatrixArticlesBySubjectUseCase } from '@/domain/use-cases'
import {
  BadRequestErrorResponse,
  OkResponse,
  InternalServerErrorResponse
} from '@/presentation/responses'

export class CreateMatrixFromArticlesController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly getMatrixArticlesBySubjectUseCase: GetMatrixArticlesBySubjectUseCase
  ) {}

  async handle(request: Request): Promise<Response> {
    try {
      const { subject } = request.query

      const error = this.validator.validate({ subject })

      if (error) {
        return BadRequestErrorResponse(error)
      }

      const articles =
        await this.getMatrixArticlesBySubjectUseCase.getMatrixArticlesBySubject(
          subject
        )

      return OkResponse(articles)
    } catch (error) {
      return InternalServerErrorResponse(error)
    }
  }
}
