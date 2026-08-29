"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitLogController = void 0;
const habit_log_1 = require("../services/habit-log");
exports.habitLogController = {
    async markDone(req, res) {
        try {
            const userId = req.userId;
            const { habitId, date } = req.body;
            const log = await habit_log_1.habitLogService.markDone(userId, habitId, date);
            res.status(200).json(log);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async markUndone(req, res) {
        try {
            const userId = req.userId;
            const { habitId, date } = req.body;
            await habit_log_1.habitLogService.markUndone(userId, habitId, date);
            res.status(200).json({ success: true });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
};
