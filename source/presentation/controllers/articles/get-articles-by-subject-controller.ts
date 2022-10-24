import {
  Controller,
  Validator,
  Request,
  Response
} from '@/application/ports/presentation'
import { GetArticlesBySubjectUseCase } from '@/domain/use-cases'
import {
  BadRequestErrorResponse,
  OkResponse,
  InternalServerErrorResponse
} from '@/presentation/responses'

export class GetArticlesBySubjectController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly getArticlesBySubjectUseCase: GetArticlesBySubjectUseCase
  ) {}

  async handle(request: Request): Promise<Response> {
    try {
      const { subject, depth, range } = request.query

      const error = this.validator.validate({ subject, depth, range })

      if (error) {
        return BadRequestErrorResponse(error)
      }

      const articles =
        await this.getArticlesBySubjectUseCase.getArticlesBySubject({
          subject,
          depth,
          range
        })

      return OkResponse(articles)
    } catch (error) {
      return InternalServerErrorResponse(error)
    }
  }
}
