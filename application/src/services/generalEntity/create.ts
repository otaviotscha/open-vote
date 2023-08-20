import { GeneralEntity } from 'entities'
import {
  CreateGeneralEntityParams,
  ICreateGeneralEntityRepository,
} from 'repositories'
import { IService } from 'services'

export type CreateGeneralEntityServiceInput = CreateGeneralEntityParams
export type CreateGeneralEntityServiceOutput = GeneralEntity

export interface ICreateGeneralEntityService
  extends IService<
    CreateGeneralEntityServiceInput,
    CreateGeneralEntityServiceOutput
  > {}

export class CreateGeneralEntityService implements ICreateGeneralEntityService {
  constructor(
    private createGeneralEntityRepository: ICreateGeneralEntityRepository
  ) {}

  execute = async (params: CreateGeneralEntityServiceInput) => {
    const generalEntity = await this.createGeneralEntityRepository.create(
      params
    )
    return generalEntity
  }
}
