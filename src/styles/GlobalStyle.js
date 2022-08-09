import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
  }
  button {
    border-radius: 0;
    border: none;
    font-weight: 700;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  ul, ol {
    padding: 0;
    margin: 0;
  }
  p {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }
  b {
    font-weight: bold;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    }
  }
`

export default GlobalStyle;