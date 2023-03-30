import * as S from './Button.style';

interface IButton {
  text: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({text, disabled, onClick, style}: IButton) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} style={style}>
      {text}
    </S.Button>
  );
};

export default Button;
