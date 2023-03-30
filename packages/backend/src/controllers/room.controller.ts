import {Request, Response} from 'express';
import RoomModel from '../models/room.model';

export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await RoomModel.find({});
    return res.status(200).json(rooms);
  } catch (e) {
    return res.status(400).send(new Error('Not Working'));
  }
};

export const createRoom = async (req: Request, res: Response) => {
  try {
    const roomData = {name: req.body.roomName};
    const existRoom = await RoomModel.findOne(roomData);

    if (existRoom) {
      return res.status(400).json(existRoom);
    } else {
      const newRoom = await RoomModel.create(roomData);
      return res.status(200).json(newRoom);
    }
  } catch (e) {
    return res.status(400).send(new Error('Not Working'));
  }
};
