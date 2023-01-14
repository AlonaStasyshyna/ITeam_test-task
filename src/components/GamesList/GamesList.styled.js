import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;

  @media screen and (min-width: 1171px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 21px;
    margin-bottom: 57px;
  }
`;
