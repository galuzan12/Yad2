import {ReactNode, useEffect, useReducer} from 'react';
import {GET_ROOMS_URL} from '../../config/envs';
import {IMessageData} from '../../types/messageData';
import {promiseHandler} from '../../utils/promise';
import axios from 'axios';

import {ChatContext} from './ChatContext';
import {actions, initialState, reducer} from './ChatReducer';
import {IRoom} from '../../types/room';

export const ChatProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getAllRooms = async () => {
      const [result] = await promiseHandler(axios.get(GET_ROOMS_URL));

      result?.data &&
        dispatch({type: actions.LOAD_ROOMS, payload: result?.data});
    };
    getAllRooms();
  }, []);

  const value = {
    username: state.username,
    messages: state.messages,
    rooms: state.rooms,
    updateMessages: (messages: IMessageData[]) => {
      dispatch({type: actions.LOAD_MESSAGES, payload: messages});
    },
    addMessage: (message: IMessageData) => {
      dispatch({type: actions.ADD_MESSAGE, payload: message});
    },
    addRoom: (room: IRoom) => {
      dispatch({type: actions.ADD_ROOM, payload: room});
    },
    setUsername: (username: string) => {
      dispatch({type: actions.SET_USER_NAME, payload: username});
    }
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
