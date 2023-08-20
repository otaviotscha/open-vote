import { Router } from 'express'

import healthCheckRouter from './healthCheck'
import generalEntityRouter from './generalEntity'

export const V1_PREFIX = '/v1'

const router = Router()

router.use(V1_PREFIX, healthCheckRouter)
router.use(V1_PREFIX, generalEntityRouter)

router.get(V1_PREFIX, (request, response) => response.send(V1_PREFIX))

export default router
