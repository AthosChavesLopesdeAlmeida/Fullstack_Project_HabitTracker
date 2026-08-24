import { Router } from 'express';
import { habitController } from '../controllers/habit.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router()

router.post('/habits', habitController.create)
router.get('/habits', habitController.list)
router.delete('/habits', habitController.delete)

export default router