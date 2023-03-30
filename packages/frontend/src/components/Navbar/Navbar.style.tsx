import styled from 'styled-components';
import {whiteColor} from '../../config/colors';

export const Navbar = styled.div`
  padding: 0.625rem;
  flex-basis: 100%;
  background: #e1dfdf;
  @media (min-width: 768px) {
    flex-basis: 30%;
  }
`;
export const NameInputContainer = styled.form`
  padding-top: 1rem;

  > * {
    margin-bottom: 0.3125rem;
  }
`;

export const NameInputText = styled.div`
  text-align: left;
  font-size: 1.25rem;
`;
export const Room = styled.div`
  background: rgb(254, 104, 2);
  background: linear-gradient(
    48deg,
    rgba(254, 104, 2, 1) 0%,
    rgba(249, 169, 26, 1) 47%,
    rgba(248, 188, 35, 1) 100%
  );
  border-radius: 0.5rem;
  height: 2rem;
  color: ${whiteColor};
  line-height: 2rem;
  box-shadow: 0.0625rem 0.0625rem 0.0625rem grey;
  cursor: pointer;
`;

export const Rooms = styled.form`
  > * {
    margin-bottom: 0.3125rem;
  }
`;

export const Username = styled.div``;
export const container = styled.div<{isOpen: boolean}>`
  height: ${({isOpen}) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto;
  }
`;

export const Error = styled.div``;
export const ScrollDown = styled.div<{isOpen: boolean}>`
  display: flex;
  height: 0.9375rem;
  justify-content: center;
  transform: ${({isOpen}) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  @media (min-width: 768px) {
    display: none;
  }
`;
