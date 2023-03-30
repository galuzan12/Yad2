import styled, {css} from 'styled-components';

export const MessageCard = styled.div<{isSender: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: ${({isSender}) =>
    isSender ? '0 0.5rem 0.5rem 0.5rem' : '0.5rem 0 0.5rem 0.5rem'};
  margin: 0.5rem 1rem;

  background: ${({isSender}) => (isSender ? '#f8bc23' : '#fb8c0e')};
  position: relative;
  align-self: ${({isSender}) => (isSender ? 'start' : 'end')};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border: 0.875rem solid transparent;
    border-top: 0;

    ${({isSender}) =>
      isSender
        ? css`
            left: 0;
            border-right-color: #f8c749;
            border-left: 0;
            margin-left: -0.75rem;
          `
        : css`
            right: 0;
            border-left-color: #f88504;
            border-right: 0;
            margin-right: -0.75rem;
          `}
  }
`;

export const MessageCardText = styled.div`
  padding: 0.5rem 1rem;
  text-align: left;
  color: #fff;
`;

export const MessageCardHeader = styled.div<{isSender?: boolean}>`
  display: flex;
  justify-content: space-between;
  background: ${({isSender}) => (isSender ? '#f8c749' : '#f88504')};
  border-radius: ${({isSender}) =>
    isSender ? '0 0.5rem 0 0' : '0.5rem 0 0 0'};
  font-size: 0.75rem;
`;

export const MessageCardName = styled.div`
  padding: 0.5rem 1rem;
`;

export const MessageCardDate = styled.div`
  padding: 0.5rem 1rem;
`;
