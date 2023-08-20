import { makeGetOneGeneralEntityByIdService } from 'factories/services/generalEntity'
import { makeCreateGeneralEntityService } from 'factories/services/generalEntity'
import { CreateGeneralEntityController } from 'rest/controllers/generalEntity/create'
import { GetOneGeneralEntityByIdController } from 'rest/controllers/generalEntity/getOneById'

export const makeGetOneGeneralEntityByIdController = () => {
  const getOneGeneralEntityByIdService = makeGetOneGeneralEntityByIdService()

  const getOneGeneralEntityByIdController =
    new GetOneGeneralEntityByIdController(getOneGeneralEntityByIdService)
  return getOneGeneralEntityByIdController
}

export const makeCreateGeneralEntityController = () => {
  const getOneGeneralEntityByIdService = makeCreateGeneralEntityService()

  const getOneGeneralEntityByIdController = new CreateGeneralEntityController(
    getOneGeneralEntityByIdService
  )
  return getOneGeneralEntityByIdController
}
