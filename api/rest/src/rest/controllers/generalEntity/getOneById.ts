import { IGetOneGeneralEntityByIdService } from 'application'

import { IController, IRequest } from 'rest/protocol'
import { notFound, ok } from 'rest/response'

export class GetOneGeneralEntityByIdController implements IController {
  constructor(
    private readonly getOneGeneralEntityByIdService: IGetOneGeneralEntityByIdService
  ) {}

  handle = async (request: IRequest) => {
    // TODO: zod validation
    const params = request.params

    const result = await this.getOneGeneralEntityByIdService.execute(params)

    if (!result) return notFound(params)
    return ok(result)
  }
}
