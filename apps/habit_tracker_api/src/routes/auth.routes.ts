import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.delete('/delete', requireAuth, authController.deleteAccount)

export default router