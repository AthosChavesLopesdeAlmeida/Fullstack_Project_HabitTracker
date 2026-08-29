"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitLogRepository = void 0;
// src/repositories/habit-log.repository.ts
const prisma_1 = require("../lib/prisma");
exports.habitLogRepository = {
    upsert(data) {
        return prisma_1.prisma.habitLog.upsert({
            where: {
                habitId_date: { habitId: data.habitId, date: new Date(data.date) },
            },
            update: { completed: data.completed },
            create: {
                habitId: data.habitId,
                date: new Date(data.date),
                completed: data.completed,
            },
        });
    },
    delete(data) {
        return prisma_1.prisma.habitLog
            .delete({
            where: {
                habitId_date: { habitId: data.habitId, date: new Date(data.date) },
            },
        })
            .catch(() => null); // evita erro se o log já não existir
    },
};
