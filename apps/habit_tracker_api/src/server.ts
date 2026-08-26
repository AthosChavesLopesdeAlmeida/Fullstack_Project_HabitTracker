import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import habitRoutes from './routes/habits.routes'
import habitLogRoutes from './routes/habit-log.routes'

const app = express()

app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json())

app.use ('/auth', authRoutes)
app.use('/habits', habitRoutes)
app.use('/habit-logs', habitLogRoutes)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));