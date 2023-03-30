import {useContext, useEffect, useMemo, useState} from 'react';
import {socket} from '../config/socket';
import {ChatContext} from '../providers/ChatProvider/ChatContext';
import {IMessageData} from '../types/messageData';
import {ISocketResponse} from '../types/socketResponse';

export enum SocketConnectionStatus {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected'
}

const useSocket = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [currentRoom, setCurrentRoom] = useState('');

  const {addMessage} = useContext(ChatContext);

  const status = useMemo(
    () =>
      isConnected
        ? SocketConnectionStatus.CONNECTED
        : SocketConnectionStatus.DISCONNECTED,
    [isConnected]
  );

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  useEffect(() => {
    const onReceiveMessage = (data: IMessageData) => {
      addMessage(data);
    };

    socket.on('receiveMessage', onReceiveMessage);

    return () => {
      socket.off('receiveMessage', onReceiveMessage);
    };
  }, [currentRoom]);

  const handleJoinRoom = (roomName: string) => {
    socket.emit('joinRoom', roomName, (response: ISocketResponse) => {
      response.status && setCurrentRoom(roomName);
    });
  };

  const handleSendChatMessage = (data: IMessageData) => {
    socket.emit(
      'sendMessage',
      currentRoom,
      data,
      (response: {status: boolean; msg: IMessageData}) => {
        response.status && addMessage(response.msg);
      }
    );
  };

  return {
    status,
    isConnected,
    currentRoom,
    handleSendChatMessage,
    handleJoinRoom
  };
};

export default useSocket;
