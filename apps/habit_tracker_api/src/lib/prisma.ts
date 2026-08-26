// src/lib/prisma.ts
import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 15000,
})

pool.on('error', (err) => {
  console.error('Erro inesperado no pool do Postgres:', err)
  // não relança o erro — só loga, evitando que derrube o processo
})

const adapter = new PrismaPg(pool)

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma