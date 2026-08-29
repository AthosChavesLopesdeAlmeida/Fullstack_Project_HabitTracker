"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitController = void 0;
const habit_service_1 = require("../services/habit.service");
exports.habitController = {
    async create(req, res) {
        try {
            const userId = req.userId;
            const { description, name } = req.body;
            const habit = await habit_service_1.habitService.create(name, description, userId);
            res.status(201).json(habit);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async list(req, res) {
        try {
            const userId = req.userId;
            const habits = await habit_service_1.habitService.findByAllByUser(userId);
            res.status(200).json(habits);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.body;
            const deleted = await habit_service_1.habitService.delete(id);
            res.status(201);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};
