import { Request, Response } from 'express'
import { handleRequestError } from 'rest/error'

import { IController, IRequest } from 'rest/protocol'

export const adaptExpressController = (controller: IController) => {
  return async (expressRequest: Request, expressResponse: Response) => {
    const customRequest: IRequest = {
      ...expressRequest,
    }

    try {
      const response = await controller.handle(customRequest)
      return expressResponse.status(response.status).send(response.data)
    } catch (error: unknown) {
      const parsedError = await handleRequestError(error)
      return expressResponse.status(parsedError.status).send(parsedError.data)
    }
  }
}
