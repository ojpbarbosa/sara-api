import { Response } from '@/application/ports/presentation'

export default ({ name, message }: Error): Response => {
  return {
    statusCode: 500,
    body: {
      name,
      message
    }
  }
}
