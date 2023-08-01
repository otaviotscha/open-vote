import { GeneralEntityPrismaRepository } from 'data-main'

export const makeGeneralEntityRepository = () => {
  const generalEntityRepository = new GeneralEntityPrismaRepository()
  return generalEntityRepository
}
