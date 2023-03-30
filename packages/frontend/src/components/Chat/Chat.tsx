import * as S from './Chat.style';
import ChatBox from '../ChatBox/ChatBox';
import Navbar from '../Navbar/Navbar';
import useSocket from '../../hooks/useSocket';
import {useContext, useEffect, useState} from 'react';
import {promiseHandler} from '../../utils/promise';
import axios from 'axios';
import {GET_MESSAGES_URL} from '../../config/envs';
import {ChatContext} from '../../providers/ChatProvider/ChatContext';

const Chat = () => {
  const {currentRoom, handleJoinRoom, handleSendChatMessage} = useSocket();
  const {updateMessages} = useContext(ChatContext);
  useEffect(() => {
    const getRoomMessages = async () => {
      const [result] = await promiseHandler(
        axios.get(`${GET_MESSAGES_URL}/${currentRoom}`)
      );
      if (result) {
        updateMessages(result.data);
      }
    };
    currentRoom && getRoomMessages();
  }, [currentRoom]);

  return (
    <S.Chat>
      <Navbar onClick={handleJoinRoom} />
      {currentRoom && (
        <ChatBox onSendMessageClick={handleSendChatMessage} />
      )}
    </S.Chat>
  );
};

export default Chat;
