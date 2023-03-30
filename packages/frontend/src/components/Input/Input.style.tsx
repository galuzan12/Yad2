import styled from 'styled-components';
import {blackColor, whiteColor} from '../../config/colors';

export const SearchInputContainer = styled.div`
  padding: 0.125rem;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  text-align: center;
  height: 2rem;
  width: 100%;
  border: none;
  font-size: 1rem;
  box-shadow: grey 0.0625rem 0.0625rem 0.0625rem;
  background: #ffffffe0;
  &:focus {
    outline: none;
  }
  &::placeholder{
    color: #ff710094;
  }
`;
