import { HealthCheckController } from 'rest/controllers/healthCheck'
import { makeHealthCheckService } from 'factories/services/healthCheck'

export const makeHealthCheckController = () => {
  const healthCheckService = makeHealthCheckService()

  const healthCheckController = new HealthCheckController(healthCheckService)
  return healthCheckController
}
