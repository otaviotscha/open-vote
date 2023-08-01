import { GeneralEntity, GeneralEntityData } from 'entities'

export type GetOneGeneralEntityByIdParams = { id: GeneralEntity['id'] }
export interface IGetOneGeneralEntityByIdRepository {
  getOneById(
    params: GetOneGeneralEntityByIdParams
  ): Promise<GeneralEntity | null>
}

export type CreateGeneralEntityParams = GeneralEntityData
export interface ICreateGeneralEntityRepository {
  create(params: CreateGeneralEntityParams): Promise<GeneralEntity>
}

export type UpdateGeneralEntityByIdParams = {
  id: GeneralEntity['id']
  data: GeneralEntityData
}
export interface IUpdateGeneralEntityByIdRepository {
  updateById(
    params: UpdateGeneralEntityByIdParams
  ): Promise<GeneralEntity | null>
}
