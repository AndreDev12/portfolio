import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after{
    box-sizing: inherit;
    /* scroll-behavior: smooth; */
  }

  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${props => props.theme.colors.christalle};
    font-family: ${props => props.theme.fonts.family};
    /* overflow-x: hidden; */
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
    &:focus{
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