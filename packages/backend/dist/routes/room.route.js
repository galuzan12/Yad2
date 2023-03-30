"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = require("../controllers/room.controller");
const router = (0, express_1.Router)();
router.get('/', room_controller_1.getRooms);
router.post('/', room_controller_1.createRoom);
exports.default = router;
//# sourceMappingURL=room.route.js.map