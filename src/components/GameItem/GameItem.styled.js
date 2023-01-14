import styled from 'styled-components';

export const Item = styled.li`
  position: relative;

  width: 252px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  background-color: #17323a;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    padding: 0 37px 7px 11px;
  }

  img {
    width: 100%;
    margin-bottom: 6px;
  }

  @media screen and (min-width: 1171px) {
    width: 262px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: calc(22 / 18);
`;

export const Date = styled.p`
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: calc(18 / 15);
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(17 / 14);
`;

export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  right: 12px;

  padding: 0;

  background-color: transparent;

  img {
    margin: 0;
  }
`;
