import { PrismaClient } from '@prisma/client'
import {
  DefaultArgs,
  PrismaClientOptions,
} from '@prisma/client/runtime/library'

export * from './prismaRepositories'

export type DefaultPrismaClient = PrismaClient<
  PrismaClientOptions,
  never,
  DefaultArgs
>

/**
 * Singleton
 */
class PrismaDatabase {
  private static instance: PrismaDatabase
  public readonly client: DefaultPrismaClient = new PrismaClient()

  /**
   * Singleton
   */
  private constructor() {}

  public static getInstance(): PrismaDatabase {
    if (PrismaDatabase.instance) return PrismaDatabase.instance
    return new PrismaDatabase()
  }

  public async initialize(databaseUrl: string) {
    /**
     * Prisma reads directly from env variables
     */
    process.env.DATABASE_URL = databaseUrl
    await this.client.$connect()
  }
}

export default PrismaDatabase
