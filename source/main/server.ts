import app from './configuration/app'
import { PORT } from './configuration/environment'

const port = PORT || 3030

app().listen(port)
