import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  font-size: 12px;
  line-height: calc(15 / 12);
  color: #ffffff;
  background-color: #5b5e63;

  img {
    margin-left: auto;
    margin-right: auto;
  }

  :hover,
  :focus {
    background-color: #17323a;
  }
`;
