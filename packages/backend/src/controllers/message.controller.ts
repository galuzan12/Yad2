import {Request, Response} from 'express';
import MessageModel from '../models/message.model';

export const getMessages = async (req: Request, res: Response) => {
  const {roomName} = req.params;
  try {
    const rooms = await MessageModel.find({roomName});
    return res.status(200).json(rooms);
  } catch (e) {
    return res.status(400).send(new Error('Soemthing went wrong'));
  }
};
