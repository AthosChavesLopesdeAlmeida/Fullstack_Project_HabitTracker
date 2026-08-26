// src/repositories/habit-log.repository.ts
import { prisma } from "../lib/prisma";

export const habitLogRepository = {
    upsert(data: { habitId: string; date: string; completed: boolean }) {
        return prisma.habitLog.upsert({
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

    delete(data: { habitId: string; date: string }) {
        return prisma.habitLog
            .delete({
                where: {
                    habitId_date: { habitId: data.habitId, date: new Date(data.date) },
                },
            })
            .catch(() => null); // evita erro se o log já não existir
    },
};