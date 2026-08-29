"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const prisma_1 = require("../lib/prisma");
exports.userRepository = {
    findByEmail(email) {
        return prisma_1.prisma.user.findUnique({ where: { email } });
    },
    findById(id) {
        return prisma_1.prisma.user.findUnique({ where: { id } });
    },
    create(data) {
        return prisma_1.prisma.user.create({ data });
    },
    delete(id) {
        return prisma_1.prisma.user.delete({ where: { id } });
    }
};
