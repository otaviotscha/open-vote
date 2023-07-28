import { config } from 'dotenv'
import { cleanEnv, num, port, str } from 'envalid'

config()

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'test', 'production'],
    default: 'production',
    devDefault: 'development',
  }),
  REST_API_PORT: port({ default: 3000 }),
  REST_API_TIMEOUT_IN_SECONDS: num({ default: 60, devDefault: 120 }),
})

export const { NODE_ENV, REST_API_PORT, REST_API_TIMEOUT_IN_SECONDS } = env
