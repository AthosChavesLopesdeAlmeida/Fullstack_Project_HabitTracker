import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
    async register (req: Request, res: Response) {
        try {
            const { email, password, name } = req.body
            const result = await authService.register(email, password, name)
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    },

    async login (req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const result = await authService.login(email, password)
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    }
}