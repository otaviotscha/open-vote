import { IService } from 'services'

type HealthCheckServiceInput = void
type HealthCheckServiceOutput = string

export interface IHealthCheckService
  extends IService<HealthCheckServiceInput, HealthCheckServiceOutput> {}

export class HealthCheckService implements HealthCheckService {
  execute = async () => {
    return 'ok'
  }
}
