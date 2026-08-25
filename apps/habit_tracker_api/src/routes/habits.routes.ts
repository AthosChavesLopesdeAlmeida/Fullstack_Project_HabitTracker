import { Router } from 'express';
import { habitController } from '../controllers/habit.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router()

router.post('/create', requireAuth, habitController.create)
router.get('/fetch', requireAuth, habitController.list)
router.delete('/delete', requireAuth, habitController.delete)

export default router