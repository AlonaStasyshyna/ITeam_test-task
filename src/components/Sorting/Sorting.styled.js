import styled from 'styled-components';

export const ButtonsList = styled.ul`
  position: relative;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 8px;

  @media screen and (min-width: 1171px) {
    flex-direction: row;
    gap: 13px;
    margin-top: 0;
    margin-left: 12px;
  }
`;

export const OrderSelection = styled.button`
  padding: 0 2px;

  background-color: #837f7f;
  border-radius: 10px;

  @media screen and (min-width: 1171px) {
    padding: 1.5px 2px;

    img {
      width: 33px;
      height: 33px;
    }
  }
`;

export const OrderSelectionList = styled.ul`
  position: absolute;
  top: 36px;
  right: 0;

  padding: 6px 16px;
  background-color: #837f7f;
  border-radius: 10px;

  li {
    :not(:last-child) {
      margin-bottom: 2px;
    }
  }

  button {
    padding: 0;
    background-color: transparent;
    color: inherit;
    font-size: 14px;
    line-height: calc(17 / 14);
  }

  @media screen and (min-width: 1171px) {
    top: 43px;
    left: 0;
    width: 144px;
  }
`;

export const FilterButton = styled.button`
  width: 262px;
  padding: 7px 45px 5px 25px;
  border-radius: 10px;
  border: none;

  text-align: left;
  font-size: 14px;
  line-height: calc(17 / 14);
  color: #ffffff;
  background-color: #837f7f;

  img {
    position: absolute;
    top: 0;
    left: 228px;
  }

  @media screen and (min-width: 1171px) {
    width: 189px;
    padding: 10px 45px 9px 15px;

    img {
      top: 3px;
      left: 200px;
    }
  }
`;

export const FilterButtonsList = styled.ul`
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 10;

  width: 262px;
  padding: 10px 12px 14px 18px;
  background-color: #837f7f;
  border-radius: 10px;

  li {
    position: relative;

    :not(:last-child) {
      margin-bottom: 4px;
    }
  }

  button {
    padding: 0;
    background-color: transparent;
    color: inherit;
    font-size: 14px;
    line-height: calc(17 / 14);
  }

  img {
    position: absolute;
    top: -3px;
    right: 0;
  }

  @media screen and (min-width: 1171px) {
    top: 43px;
    left: 50px;
    width: 189px;
  }
`;
