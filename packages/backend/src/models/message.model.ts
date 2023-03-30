import mongoose, {Document, Model} from 'mongoose';

interface IMessage {
  sender: string;
  roomName: string;
  msg: string;
}

interface IMessageDoc extends IMessage, Document {}

interface IMessageModel extends Model<IMessageDoc> {}

const messageSchema = new mongoose.Schema<IMessageDoc, IMessageModel>(
  {
    sender: {
      type: String,
      required: true
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
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model<IMessageDoc, IMessageModel>(
  'Message',
  messageSchema
);

export default Message;
