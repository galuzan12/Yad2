"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    sender: {
        type: String,
        required: true
        //   index: true
    },
    roomName: {
        type: String,
        index: true,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Token = mongoose_1.default.model('Message', messageSchema);
exports.default = Token;
//# sourceMappingURL=message.model.js.map