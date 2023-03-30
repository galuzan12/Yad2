import styled from 'styled-components';

export const ChatBox = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 16px;
  overflow-y: hidden;
  padding-bottom: 3.5rem;
  @media (min-width: 768px) {
    flex-basis: 70%;
    height: calc(100vh - 95px);
    padding-bottom: 0;
  }
`;

export const SendMessageContainer = styled.form`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  background: #f0f0f0;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export const MessagesContainer = styled.div`
  overflow-y: auto;
  padding-right: 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HiddenP = styled.p`
  visibility: hidden;
`;
