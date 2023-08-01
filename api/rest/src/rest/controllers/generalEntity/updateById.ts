import { IUpdateGeneralEntityByIdService } from 'application'

import { IController, IRequest } from 'rest/protocol'
import { notFound, ok } from 'rest/response'

export class UpdateGeneralEntityByIdController implements IController {
  constructor(
    private readonly updateGeneralEntityByIdService: IUpdateGeneralEntityByIdService
  ) {}

  handle = async (request: IRequest) => {
    // TODO: zod validation
    const params = request.params
    const body = request.body

    const result = await this.updateGeneralEntityByIdService.execute({
      id: params.id,
      data: body,
    })

    if (!result) return notFound(params)
    return ok(result)
  }
}
