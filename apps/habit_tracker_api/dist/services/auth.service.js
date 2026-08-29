"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_repository_1 = require("../repositories/user.repository");
const JWT_SECRET = process.env.JWT_SECRET;
exports.authService = {
    async register(email, password, name) {
        const existing = await user_repository_1.userRepository.findByEmail(email);
        if (existing)
            throw new Error('Email already registered');
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await user_repository_1.userRepository.create({ email, password: hashedPassword, name });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
        return { user: { id: user.id, name: user.name, email: user.email }, token };
    },
    async login(email, password) {
        const user = await user_repository_1.userRepository.findByEmail(email);
        if (!user)
            throw new Error('Invalid credentials');
        const isValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isValid)
            throw new Error('Invalid credentials');
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
        return { user: { id: user.id, name: user.name, email: user.email }, token };
    },
    async deleteAccount(userId, password) {
        const user = await user_repository_1.userRepository.findById(userId);
        if (!user)
            throw new Error('User not found');
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid)
            throw new Error('Invalid password');
        await user_repository_1.userRepository.delete(userId);
    }
};
