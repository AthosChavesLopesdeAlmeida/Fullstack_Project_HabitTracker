"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    async register(req, res) {
        try {
            const { email, password, name } = req.body;
            const result = await auth_service_1.authService.register(email, password, name);
            res.status(201).json(result);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await auth_service_1.authService.login(email, password);
            res.status(201).json(result);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    async deleteAccount(req, res) {
        try {
            const userId = req.userId;
            const { password } = req.body;
            await auth_service_1.authService.deleteAccount(userId, password);
            res.status(200).json({ success: true });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};
