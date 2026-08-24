import { prisma } from "../lib/prisma";

export const habitRepository = {
    findAllByUser (userId: string) {
        return prisma.habit.findMany({where: { userId: userId }})
    },
    create (name: string, description: string, userId: string ) {
        return prisma.habit.create({ data: {name: name, description: description, userId: userId }})
    },
    delete (id: string) {
        return prisma.habit.delete({ where: { id: id } })
    }
}