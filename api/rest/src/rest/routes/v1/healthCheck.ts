import { Router } from 'express'

import { adaptExpressController } from 'adapters/express/controller'

import { makeHealthCheckController } from 'factories/controllers/healthCheck'

export const HEALTH_CHECK_PREFIX = '/health-check'

const router = Router()

const healthCheckController = makeHealthCheckController()

router.get(HEALTH_CHECK_PREFIX, adaptExpressController(healthCheckController))

export default router
