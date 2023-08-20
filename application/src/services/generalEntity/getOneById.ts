import { GeneralEntity } from 'entities'
import {
  GetOneGeneralEntityByIdParams,
  IGetOneGeneralEntityByIdRepository,
} from 'repositories'
import { IService } from 'services'

export type GetOneGeneralEntityByIdServiceInput = GetOneGeneralEntityByIdParams
export type GetOneGeneralEntityByIdServiceOutput = GeneralEntity | null

export interface IGetOneGeneralEntityByIdService
  extends IService<
    GetOneGeneralEntityByIdServiceInput,
    GetOneGeneralEntityByIdServiceOutput
  > {}

export class GetOneGeneralEntityByIdService
  implements IGetOneGeneralEntityByIdService
{
  constructor(
    private getOneGeneralEntityByIdRepository: IGetOneGeneralEntityByIdRepository
  ) {}

  execute = async (params: GetOneGeneralEntityByIdServiceInput) => {
    const generalEntity =
      await this.getOneGeneralEntityByIdRepository.getOneById(params)
    return generalEntity
  }
}
