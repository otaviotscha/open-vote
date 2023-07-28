/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequest {
  headers: any
  params: any
  query: any
}

export interface IResponse {
  status: number
  data?: unknown
}

export interface IController {
  handle: (request: IRequest) => Promise<IResponse>
}

export interface IMiddleware {
  handle: (request: IRequest) => Promise<IResponse>
}
