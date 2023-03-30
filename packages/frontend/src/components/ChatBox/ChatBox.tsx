import MessageCard from '../MessageCard/MessageCard';
import * as S from './ChatBox.style';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  HtmlHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import {useTranslations} from '../../hooks/useTranslations';
import {ChatContext} from '../../providers/ChatProvider/ChatContext';
import {IMessageData} from '../../types/messageData';

interface IChat {
  onSendMessageClick: (sendData: IMessageData) => void;
}

const ChatBox = ({onSendMessageClick}: IChat) => {
  const [newMsg, setNewMsg] = useState('');
  const t = useTranslations('chat.chatBox');
  const {messages, username} = useContext(ChatContext);
  const messagesEndRef = useRef<HTMLParagraphElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSendMessageClick({sender: username, msg: newMsg});
    setNewMsg('');
  };

  return (
    <S.ChatBox>
      <S.MessagesContainer>
        {messages.map((messageData: IMessageData, index) => (
          <MessageCard
            key={index}
            messageData={messageData}
            isSender={username === messageData.sender}
          />
        ))}
        <S.HiddenP ref={messagesEndRef}></S.HiddenP>
      </S.MessagesContainer>
      <S.SendMessageContainer onSubmit={handleSendMessage}>
        <Input
          value={newMsg}
          placeholder={t.placeholder}
          onChange={value => setNewMsg(value)}
          style={{flexGrow: 2}}
        />
        <Button
          text={t.sendMessageBtnTxt}
          disabled={!newMsg}
          style={{flexGrow: 1, width: 'auto', marginLeft: '1rem'}}
        />
      </S.SendMessageContainer>
    </S.ChatBox>
  );
};

export default ChatBox;
