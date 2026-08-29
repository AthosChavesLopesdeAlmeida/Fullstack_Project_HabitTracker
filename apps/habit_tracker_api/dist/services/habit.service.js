"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitService = void 0;
const habit_repository_1 = require("../repositories/habit.repository");
exports.habitService = {
    create(name, description, userId) {
        if (!userId)
            throw new Error('User not found');
        if (!name)
            throw new Error('The name of the habit is required');
        return habit_repository_1.habitRepository.create(name, description, userId);
    },
    delete(id) {
        if (!id)
            throw new Error('Habit not found');
        return habit_repository_1.habitRepository.delete(id);
    },
    findByAllByUser(userId) {
        if (!userId)
            throw new Error('User not found');
        return habit_repository_1.habitRepository.findAllByUser(userId);
    }
};
