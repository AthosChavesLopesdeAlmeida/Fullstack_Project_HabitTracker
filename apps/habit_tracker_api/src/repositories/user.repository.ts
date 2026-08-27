import { prisma } from '../lib/prisma'

export const userRepository = {
    findByEmail (email: string) {
        return prisma.user.findUnique({ where: {email} })
    },
    findById (id: string) {
        return prisma.user.findUnique({ where: { id } })
    },
    create (data: { email: string; password: string, name: string }) {
        return prisma.user.create({ data })        
    },
    delete (id: string) {
        return prisma.user.delete({ where: { id } })
    }
}