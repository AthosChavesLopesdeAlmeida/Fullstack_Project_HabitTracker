"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitLogService = void 0;
// src/services/habit-log.service.ts
const habit_log_repository_1 = require("../repositories/habit-log.repository");
const habit_repository_1 = require("../repositories/habit.repository");
async function assertOwnership(userId, habitId) {
    const habit = await habit_repository_1.habitRepository.findById(habitId);
    if (!habit)
        throw new Error('Habit not found');
    if (habit.userId !== userId)
        throw new Error('Not authorized');
}
exports.habitLogService = {
    async markDone(userId, habitId, date) {
        await assertOwnership(userId, habitId);
        return habit_log_repository_1.habitLogRepository.upsert({ habitId, date, completed: true });
    },
    async markUndone(userId, habitId, date) {
        await assertOwnership(userId, habitId);
        return habit_log_repository_1.habitLogRepository.delete({ habitId, date });
    },
};
