import { Graph } from '.'

export interface Provider {
  id: string
  name: string
  url: string
  logo: string

  graphs?: Graph[]
}
