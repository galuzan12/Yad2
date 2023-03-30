import express, {Express, Request, Response} from 'express';
import {PORT} from './config/envs';
import roomRouter from './routes/room.route';
import messageRouter from './routes/message.route';
const app: Express = express();
import cors from 'cors';
import mongoose from 'mongoose';
const socketIoInit = require('socket.io');
import socketIoHandlers from './socket/';
import http from 'http';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/rooms', roomRouter);
app.use('/api/messages', messageRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

const server = http.createServer(app);

mongoose
  .connect('mongodb://127.0.0.1:27017/yad2')
  .then(() => {
    const io = socketIoInit(server, {cors: {origin: '*'}});
    socketIoHandlers(io);
    server.listen(PORT);
  })
  .catch(e => {
    console.log(e.message);
  });
