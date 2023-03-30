import mongoose, {Document, Model} from 'mongoose';

interface IRoom {
  name: string;
}

interface IRoomDoc extends IRoom, Document {}

interface IRoomModel extends Model<IRoomDoc> {}

const roomSchema = new mongoose.Schema<IRoomDoc, IRoomModel>(
  {
    name: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

const Token = mongoose.model<IRoomDoc, IRoomModel>('Room', roomSchema);

export default Token;
