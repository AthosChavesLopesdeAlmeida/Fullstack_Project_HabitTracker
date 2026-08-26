import { Request, Response } from 'express';
import { habitService } from '../services/habit.service';

export const habitController = {
    async create (req: Request, res: Response) {
        try {
            const userId = req.userId!
            const { description, name } = req.body
            
            const habit = await habitService.create(name, description, userId)
            res.status(201).json(habit)
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    },

    async list (req: Request, res: Response) {
        try {
            const userId = req.userId!
            const habits = await habitService.findByAllByUser(userId)
            res.status(200).json(habits)        
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    },

    async delete (req: Request, res: Response) {
        try {
            const { id } = req.body
            const deleted = await habitService.delete(id)
            res.status(201)

        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }

    }
}