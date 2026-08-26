import { Router } from 'express';
import { habitLogController } from '../controllers/habit-log.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.post('/mark-done', requireAuth, habitLogController.markDone);
router.post('/mark-undone', requireAuth, habitLogController.markUndone);

export default router;