"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habit_log_controller_1 = require("../controllers/habit-log.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/mark-done', auth_middleware_1.requireAuth, habit_log_controller_1.habitLogController.markDone);
router.post('/mark-undone', auth_middleware_1.requireAuth, habit_log_controller_1.habitLogController.markUndone);
exports.default = router;
