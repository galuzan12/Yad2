import {IMessageData} from '../../types/messageData';
import {IRoom} from '../../types/room';

export const initialState = {
  username: '',
  messages: [],
  rooms: [],
  updateMessages: (messages: IMessageData[]) => {},
  addMessage: (message: IMessageData) => {},
  addRoom: (room: IRoom) => {},
  setUsername: (username: string) => {}
};

export const actions = {
  ADD_MESSAGE: 'Chat/addMessage',
  LOAD_MESSAGES: 'Chat/loadMessage',
  LOAD_ROOMS: 'Chat/loadRooms',
  ADD_ROOM: 'Chat/addRoom',
  SET_USER_NAME: 'Chat/setUserName'
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      const updatedMessages = [...state.messages, action.payload];
      return {
        ...state,
        messages: updatedMessages
      };
    case actions.LOAD_MESSAGES: {
      return {
        ...state,
        messages: action.payload
      };
    }
    case actions.LOAD_ROOMS: {
      return {
        ...state,
        rooms: action.payload
      };
    }
    case actions.ADD_ROOM: {
      const rooms = state.rooms;
      return {
        ...state,
        rooms: [...rooms, action.payload]
      };
    }
    case actions.SET_USER_NAME: {
      return {
        ...state,
        username: action.payload
      };
    }

    default:
      return state;
  }
};
