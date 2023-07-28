import { IHealthCheckService } from 'application'

import { IController } from 'rest/protocol'
import { ok } from 'rest/response'

export class HealthCheckController implements IController {
  constructor(private readonly healthCheckService: IHealthCheckService) {}

  handle = async () => {
    const result = await this.healthCheckService.execute()
    return ok({ ok: result })
  }
}
