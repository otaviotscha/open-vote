import { IResponse } from './protocol'

type BaseHTTPErrorParams = { message: string; status: number }

class BaseHTTPError extends Error {
  public status: number

  constructor(params: BaseHTTPErrorParams) {
    super(params.message)
    this.name = 'BaseHTTPError'
    this.status = params.status
  }
}

export const handleRequestError = async (
  error: unknown
): Promise<IResponse> => {
  if (error instanceof BaseHTTPError) {
    return returnError({
      status: error.status,
      message: error.message,
    })
  }

  const message = error instanceof Error ? error.message : 'Unexpected error'
  return returnError({ status: 500, message })
}

const returnError = (params: BaseHTTPErrorParams): IResponse => {
  return { status: params.status, data: { message: params.message } }
}
