import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    font-size: 92.5%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  *{
    margin: 0;
    padding: 0;
  }

  body{
    /* overflow-x: hidden; */
    font-family: ${props => props.theme.fonts.family};
    background-color: ${props => props.theme.colors.christalle}
  }

  img{
    display: block;
    width: 100%;
  }

  button{
    border-radius: 0;
    border: none;
    font-weight: 700;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }

  li{
    list-style: none;
  }

  ul, ol{
    padding: 0;
    margin: 0;
  }

  p{
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b{
    font-weight: bold;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;