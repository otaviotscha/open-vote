import { ICreateGeneralEntityService } from 'application'

import { IController, IRequest } from 'rest/protocol'
import { created } from 'rest/response'

export class CreateGeneralEntityController implements IController {
  constructor(
    private readonly createGeneralEntityService: ICreateGeneralEntityService
  ) {}

  handle = async (request: IRequest) => {
    // TODO: zod validation
    const body = request.body

    const result = await this.createGeneralEntityService.execute(body)
    return created(result)
  }
}
