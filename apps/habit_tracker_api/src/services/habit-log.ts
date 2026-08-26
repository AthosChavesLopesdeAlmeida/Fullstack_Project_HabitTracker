// src/services/habit-log.service.ts
import { habitLogRepository } from '../repositories/habit-log.repository';
import { habitRepository } from '../repositories/habit.repository';

async function assertOwnership(userId: string, habitId: string) {
    const habit = await habitRepository.findById(habitId);
    if (!habit) throw new Error('Habit not found');
    if (habit.userId !== userId) throw new Error('Not authorized');
}

export const habitLogService = {
    async markDone(userId: string, habitId: string, date: string) {
        await assertOwnership(userId, habitId);
        return habitLogRepository.upsert({ habitId, date, completed: true });
    },

    async markUndone(userId: string, habitId: string, date: string) {
        await assertOwnership(userId, habitId);
        return habitLogRepository.delete({ habitId, date });
    },
};