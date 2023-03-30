import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  > * {
    margin: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fb9412;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Logo = styled.div``;
