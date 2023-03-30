"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roomController = require('../controllers/room');
const router = (0, express_1.Router)();
router.post('/', roomController.register);
//# sourceMappingURL=room.js.map