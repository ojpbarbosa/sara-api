import { Article } from '.'

export interface Publisher {
  id: string
  name: string
  website: string

  articles?: Article[]
}
