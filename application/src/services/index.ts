export interface IService<IParams = void, IReturn = void> {
  execute: (params: IParams) => Promise<IReturn>
}

export * from './generalEntity'
export * from './healthCheck'
