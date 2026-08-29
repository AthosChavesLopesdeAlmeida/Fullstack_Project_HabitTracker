"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./types/express.d.ts" />
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const habits_routes_1 = __importDefault(require("./routes/habits.routes"));
const habit_log_routes_1 = __importDefault(require("./routes/habit-log.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: process.env.FRONTEND_URL }));
app.use(express_1.default.json());
app.use('/auth', auth_routes_1.default);
app.use('/habits', habits_routes_1.default);
app.use('/habit-logs', habit_log_routes_1.default);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
