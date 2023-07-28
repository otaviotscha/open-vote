import { Router } from 'express'

import routerV1 from './v1'

export const ROOT_PREFIX = '/'
export const API_PREFIX = '/api'

const router = Router()

router.use(API_PREFIX, routerV1)

router.get(ROOT_PREFIX, (request, response) => response.send(ROOT_PREFIX))
router.get(API_PREFIX, (request, response) => response.send(API_PREFIX))

export default router
