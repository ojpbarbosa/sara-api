import { Response } from '@/application/ports/presentation'

export default ({ name, message }: Error): Response => {
  return {
    statusCode: 400,
    body: {
      name,
      message
    }
  }
}
