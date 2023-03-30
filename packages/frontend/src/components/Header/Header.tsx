import {useTranslations} from '../../hooks/useTranslations';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import * as S from './Header.style';

const Header = () => {
  const t = useTranslations('header');

  return (
    <S.Header>
      <S.Logo>
        <DynamicIcon path={'yad2-logo.png'} width={150} />
      </S.Logo>
      <S.Title>{t.title}</S.Title>
    </S.Header>
  );
};

export default Header;
