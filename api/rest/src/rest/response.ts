import { IResponse } from './protocol'

export const ok = (data?: unknown): IResponse => {
  return { status: 200, data }
}

// TODO: add entity param
export const created = (data?: unknown): IResponse => {
  return { status: 201, data }
}

export const noContent = (data?: unknown): IResponse => {
  return { status: 204, data }
}

export const badRequest = (data?: unknown): IResponse => {
  return { status: 400, data }
}

// TODO: add entity param
export const notFound = (data?: unknown): IResponse => {
  return { status: 404, data }
}
