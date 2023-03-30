"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envs_1 = require("./config/envs");
const room_route_1 = __importDefault(require("./routes/room.route"));
const message_route_1 = __importDefault(require("./routes/message.route"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const socketIoInit = require('socket.io');
const socket_1 = __importDefault(require("./socket/"));
const http_1 = __importDefault(require("http"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/rooms', room_route_1.default);
app.use('/api/messages', message_route_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const server = http_1.default.createServer(app);
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/yad2')
    .then(() => {
    const io = socketIoInit(server, { cors: { origin: '*' } });
    (0, socket_1.default)(io);
    server.listen(envs_1.PORT);
})
    .catch(e => {
    console.log(e.message);
});
//# sourceMappingURL=index.js.map