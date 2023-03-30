"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_model_1 = __importDefault(require("../models/message.model"));
const socketServer = (io) => {
    io.on('connection', (socket) => {
        socket.on('joinRoom', (roomName, res) => {
            socket.join(roomName);
            res({
                status: true
            });
        });
        socket.on('sendMessage', (roomName, data, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const newMsg = yield message_model_1.default.create(Object.assign({ roomName }, data));
                socket.to(roomName).emit('receiveMessage', newMsg);
                res({
                    status: true,
                    msg: newMsg
                });
            }
            catch (e) {
                console.log('error', e);
                res({
                    status: false
                });
            }
        }));
    });
};
exports.default = socketServer;
//# sourceMappingURL=index.js.map