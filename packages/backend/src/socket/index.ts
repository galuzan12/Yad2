import {Server, Socket} from 'socket.io';
import MessageModel from '../models/message.model';

const socketServer = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on('joinRoom', (roomName, res) => {
      socket.join(roomName);
      res({
        status: true
      });
    });

    socket.on('sendMessage', async (roomName, data, res) => {
      try {
        const newMsg = await MessageModel.create({
          roomName,
          ...data
        });

        socket.to(roomName).emit('receiveMessage', newMsg);
        res({
          status: true,
          msg: newMsg
        });
      } catch (e) {
        console.log('error', e);

        res({
          status: false
        });
      }
    });
  });
};

export default socketServer;
