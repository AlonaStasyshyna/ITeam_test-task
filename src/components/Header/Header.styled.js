import styled from 'styled-components';
import { Container } from 'utils/GlobalStyle';

export const HeaderSection = styled.header`
  margin-bottom: 15px;

  @media screen and (min-width: 1171px) {
    margin-bottom: 57px;
  }
`;

export const CustomizedContainer = styled(Container)`
  @media screen and (min-width: 1171px) {
    display: flex;
    align-items: center;
  }
`;
