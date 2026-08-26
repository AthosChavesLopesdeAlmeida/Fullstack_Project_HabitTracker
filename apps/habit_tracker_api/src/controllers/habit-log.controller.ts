// src/controllers/habit-log.controller.ts
import { Request, Response } from 'express';
import { habitLogService } from '../services/habit-log';

export const habitLogController = {
    async markDone(req: Request, res: Response) {
        try {
            const userId = req.userId!;
            const { habitId, date } = req.body;
            const log = await habitLogService.markDone(userId, habitId, date);
            res.status(200).json(log);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    },

    async markUndone(req: Request, res: Response) {
        try {
            const userId = req.userId!;
            const { habitId, date } = req.body;
            await habitLogService.markUndone(userId, habitId, date);
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }
    },
};