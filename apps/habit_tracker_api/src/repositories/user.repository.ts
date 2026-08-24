import { prisma } from '../lib/prisma'

export const userRepository = {
    findByEmail (email: string) {
        return prisma.user.findUnique({ where: {email} })
    },
    create (data: { email: string; password: string, name: string }) {
        return prisma.user.create({ data })        
    }
}