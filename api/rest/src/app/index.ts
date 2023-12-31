import cors from 'cors'
import express, { json } from 'express'

import router from 'rest/routes'

const app = express()

app.use(cors())
app.use(json())

app.use(router)

export default app
