import { HealthCheckService } from 'application'

export const makeHealthCheckService = () => {
  const healthCheckService = new HealthCheckService()
  return healthCheckService
}
