import {
  CreateGeneralEntityService,
  GetOneGeneralEntityByIdService,
} from 'application'
import { makeGeneralEntityRepository } from 'factories/repositories/generalEntity'

export const makeGetOneGeneralEntityByIdService = () => {
  const generalEntityRepository = makeGeneralEntityRepository()

  const getOneGeneralEntityByIdService = new GetOneGeneralEntityByIdService(
    generalEntityRepository
  )
  return getOneGeneralEntityByIdService
}

export const makeCreateGeneralEntityService = () => {
  const generalEntityRepository = makeGeneralEntityRepository()

  const getOneGeneralEntityByIdService = new CreateGeneralEntityService(
    generalEntityRepository
  )
  return getOneGeneralEntityByIdService
}
