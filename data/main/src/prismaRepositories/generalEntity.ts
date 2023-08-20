import {
  CreateGeneralEntityParams,
  GetOneGeneralEntityByIdParams,
  ICreateGeneralEntityRepository,
  IGetOneGeneralEntityByIdRepository,
  IUpdateGeneralEntityByIdRepository,
  UpdateGeneralEntityByIdParams,
} from 'repositories'

import PrismaDatabase from '..'

export class GeneralEntityPrismaRepository
  implements
    IGetOneGeneralEntityByIdRepository,
    ICreateGeneralEntityRepository,
    IUpdateGeneralEntityByIdRepository
{
  getOneById = async (params: GetOneGeneralEntityByIdParams) => {
    const generalEntity =
      await PrismaDatabase.getInstance().client.generalEntity.findUnique({
        where: params,
      })
    if (!generalEntity) return null
    return generalEntity
  }

  create = async (params: CreateGeneralEntityParams) => {
    const generalEntity =
      await PrismaDatabase.getInstance().client.generalEntity.create({
        data: params,
      })
    return generalEntity
  }

  updateById = async (params: UpdateGeneralEntityByIdParams) => {
    const generalEntity =
      await PrismaDatabase.getInstance().client.generalEntity.update({
        where: { id: params.id },
        data: params.data,
      })
    return generalEntity
  }
}
