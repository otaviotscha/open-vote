import Database from 'data-main'

/**
 * Loads .env file
 */
import './config/env'

/**
 * Env variables
 */
import {
  DATABASE_URL,
  REST_API_PORT,
  REST_API_TIMEOUT_IN_SECONDS,
} from './config/env'

/**
 * Infra
 */
import app from './app'

const startDatabaseConnection = async () => {
  const databaseClient = Database.getInstance()
  await databaseClient.initialize(DATABASE_URL)
  console.log('Running Database')

  return databaseClient
}

const startServer = () => {
  const server = app.listen(REST_API_PORT, () => {
    console.log(`Running REST API on port: "${REST_API_PORT}"`)
  })
  server.setTimeout(REST_API_TIMEOUT_IN_SECONDS)

  return server
}

const start = async () => {
  const databaseClient = await startDatabaseConnection()
  const server = startServer()
  return { databaseClient, server }
}

start()
