import { setupApp } from './configuration/app'
import { PORT } from './configuration/environment'

const app = setupApp()

const port = PORT || 3030

app.listen(port)
