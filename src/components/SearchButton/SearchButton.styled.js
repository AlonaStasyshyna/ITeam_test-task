import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  top: -31px;
  right: 0;

  display: flex;
  padding: 8px 16px;

  background-color: #837f7f;
  border-radius: 10px;

  @media screen and (min-width: 1171px) {
    top: 0;
    right: -397px;

    padding-top: 10px;
    padding-bottom: 9px;
  }
`;

export const Button = styled.button`
  padding: 0;

  background-color: transparent;
  border: none;
  font-size: 12px;
  line-height: calc(15 / 12);
  color: #ffffff;

  :not(:last-child) {
    margin-right: 17px;
  }

  @media screen and (min-width: 1171px) {
    line-height: calc(17 / 12);
  }
`;
