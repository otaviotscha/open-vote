/**
 * Loads .env file
 */
import './config/env'

/**
 * Env variables
 */
import { REST_API_PORT, REST_API_TIMEOUT_IN_SECONDS } from './config/env'

/**
 * Infra
 */
import app from './app'

const server = app.listen(REST_API_PORT, () => {
  console.log(`Running REST API on port: "${REST_API_PORT}"`)
})
server.setTimeout(REST_API_TIMEOUT_IN_SECONDS)
