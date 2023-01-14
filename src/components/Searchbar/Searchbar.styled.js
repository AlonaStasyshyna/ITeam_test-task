import styled from 'styled-components';

export const Form = styled.form`
  position: relative;

  img {
    position: absolute;
    top: 14px;
    left: 278px;
  }

  @media screen and (min-width: 1171px) {
    margin-left: -8px;

    img {
      top: 8px;
      left: 568px;

      width: 23px;
      height: 23px;
    }
  }
`;

export const Input = styled.input`
  width: 306px;
  margin-top: 7px;
  padding: 7px 45px 5px 25px;
  border-radius: 10px;
  border: none;

  font-size: 14px;
  line-height: calc(17 / 14);
  color: #ffffff;
  background-color: #837f7f;

  ::placeholder {
    color: #ffffff;
  }

  @media screen and (min-width: 1171px) {
    width: 602px;
    margin-top: 0;
    padding: 10px 45px 9px 15px;
  }
`;
