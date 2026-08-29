"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitRepository = void 0;
const prisma_1 = require("../lib/prisma");
exports.habitRepository = {
    findAllByUser(userId) {
        return prisma_1.prisma.habit.findMany({
            where: { userId: userId },
            include: { logs: true }
        });
    },
    create(name, description, userId) {
        return prisma_1.prisma.habit.create({ data: { name: name, description: description, userId: userId } });
    },
    delete(id) {
        return prisma_1.prisma.habit.delete({ where: { id: id } });
    },
    findById(id) {
        return prisma_1.prisma.habit.findUnique({ where: { id } });
    },
};
