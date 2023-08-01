import { Router } from 'express'

import { adaptExpressController } from 'adapters/express/controller'

import {
  makeCreateGeneralEntityController,
  makeGetOneGeneralEntityByIdController,
} from 'factories/controllers/generalEntity'

export const GENERAL_ENTITY_PREFIX = '/general-entity'

const router = Router()

const getOneGeneralEntityByIdController =
  makeGetOneGeneralEntityByIdController()
const createGeneralEntityController = makeCreateGeneralEntityController()

// TODO: get many
router.get(
  `${GENERAL_ENTITY_PREFIX}/:id`,
  adaptExpressController(getOneGeneralEntityByIdController)
)
router.post(
  GENERAL_ENTITY_PREFIX,
  adaptExpressController(createGeneralEntityController)
)
// TODO: update by id

export default router
