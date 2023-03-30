import PropTypes from 'prop-types';

import * as S from './Input.style';

interface ISearchInput {
  value: string;
  placeholder?: string;
  style?: React.CSSProperties;
  onChange: (changeValue: string) => void;
}

const SearchInput = ({value, placeholder, style, onChange}: ISearchInput) => {
  return (
    <S.SearchInputContainer style={style}>
      <S.SearchInput
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      ></S.SearchInput>
    </S.SearchInputContainer>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchInput;
