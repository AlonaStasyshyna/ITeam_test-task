import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 2px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #FFFFFF;
  background-color: #171A21;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (min-width: 1171px) {
    padding-top: 35px;
    padding-bottom: 17px;
  }
}
main {
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

button,
input {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}

button {
  cursor: pointer;
  border: none;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 29px;
  width: 100%;
  @media screen and (min-width: 360px) {
    width: 360px;
  }

  @media screen and (min-width: 1171px) {
    padding-left: 12px;
    padding-right: 18px;
    width: 1171px;
  }
`;
