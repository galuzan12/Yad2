import Input from '../Input/Input';
import * as S from './Navbar.style';
import {useContext, useMemo, useState} from 'react';
import {useTranslations} from '../../hooks/useTranslations';
import Button from '../Button/Button';
import {promiseHandler} from '../../utils/promise';
import axios from 'axios';
import {GET_ROOMS_URL} from '../../config/envs';
import {ChatContext} from '../../providers/ChatProvider/ChatContext';
import {IRoom} from '../../types/room';
import {ReactComponent as ArrowDownIcon} from '../../assests/arrow-down-icon.svg';
interface INavbar {
  onClick: (roomName: string) => void;
}

const Navbar = ({onClick}: INavbar) => {
  const [searchInput, setSearchInput] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations('chat.navbar');

  const {rooms, username, addRoom, setUsername} = useContext(ChatContext);

  const handleRoomSearchClick = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setError(null);
    e.preventDefault();
    const [result, error] = await promiseHandler(
      axios.post(GET_ROOMS_URL, {roomName: searchInput})
    );
    if (result) {
      addRoom(result.data);
      setSearchInput('');
    }
    if (error) {
      setError(t.roomTakenError);
    }
  };

  const handleUsername = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(name);
  };

  return (
    <S.Navbar>
      <S.container isOpen={isOpen}>
        <S.NameInputContainer onSubmit={handleUsername}>
          {username ? (
            <S.Username>Hi, {username}</S.Username>
          ) : (
            <>
              <Input
                value={name}
                placeholder={t.enterChatPlaceholder}
                onChange={value => setName(value)}
              />
              <Button text={t.enterChat} />
            </>
          )}
        </S.NameInputContainer>
        {username && (
          <S.Rooms onSubmit={handleRoomSearchClick}>
            {rooms.map((room: IRoom) => (
              <S.Room
                key={room.name + room.createdAt}
                onClick={() => onClick(room.name)}
              >
                {room.name}
              </S.Room>
            ))}
            <Input
              value={searchInput}
              placeholder={t.placeholder}
              onChange={value => setSearchInput(value)}
            />
            <Button text={t.roomSearchBtnTxt} />
          </S.Rooms>
        )}
        {error && <S.Error>{error}</S.Error>}
      </S.container>
      {username && (
        <S.ScrollDown isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
          <ArrowDownIcon />
        </S.ScrollDown>
      )}
    </S.Navbar>
  );
};

export default Navbar;
