import { GeneralEntity } from 'entities'
import {
  UpdateGeneralEntityByIdParams,
  IUpdateGeneralEntityByIdRepository,
} from 'repositories'
import { IService } from 'services'

export type UpdateGeneralEntityByIdServiceInput = UpdateGeneralEntityByIdParams
export type UpdateGeneralEntityByIdServiceOutput = GeneralEntity | null

export interface IUpdateGeneralEntityByIdService
  extends IService<
    UpdateGeneralEntityByIdServiceInput,
    UpdateGeneralEntityByIdServiceOutput
  > {}

export class UpdateGeneralEntityById
  implements IUpdateGeneralEntityByIdService
{
  constructor(
    private createGeneralEntityRepository: IUpdateGeneralEntityByIdRepository
  ) {}

  execute = async (params: UpdateGeneralEntityByIdServiceInput) => {
    const generalEntity = await this.createGeneralEntityRepository.updateById(
      params
    )
    return generalEntity
  }
}
