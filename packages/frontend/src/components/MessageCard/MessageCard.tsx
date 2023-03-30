import * as S from './MessageCard.style';
import {IMessageData} from '../../types/messageData';

interface IMessageCard {
  messageData: IMessageData;
  isSender: boolean;
}

const formatDate = (date: Date) => {
  const formattedDate = new Date(date);
  return `${formattedDate.getHours()}:${formattedDate.getMinutes()}`;
};

const MessageCard = ({messageData, isSender}: IMessageCard) => {
  return (
    <S.MessageCard isSender={isSender}>
      <S.MessageCardHeader isSender={isSender}>
        <S.MessageCardName>{messageData.sender}</S.MessageCardName>
        <S.MessageCardDate>
          {messageData?.createdAt && formatDate(messageData?.createdAt)}
        </S.MessageCardDate>
      </S.MessageCardHeader>
      <S.MessageCardText>{messageData.msg}</S.MessageCardText>
    </S.MessageCard>
  );
};

export default MessageCard;
