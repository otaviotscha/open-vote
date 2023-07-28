import { HealthCheckController } from 'rest/controllers/healthCheck'
import { makeHealthCheckService } from 'factories/services/healthCheck'

export const makeHealthCheckController = () => {
  const healthCheckServide = makeHealthCheckService()

  const healthCheckController = new HealthCheckController(healthCheckServide)
  return healthCheckController
}
