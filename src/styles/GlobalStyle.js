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
    background-color: ${({theme}) => theme.colors.darkBlue};
    font-family: ${({theme}) => theme.fonts.family};
    /* overflow-x: hidden; */
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #2d1950;
    /* background: transparent; */
  }

  ::-webkit-scrollbar-thumb {
    /* background: rgba(178, 121, 216, 0.959); */
    background: ${({theme}) => theme.colors.purple};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(222, 130, 235, 0.911);
    border-radius: 12px;
  }

/* body::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}

body::-webkit-scrollbar-track {
  background: blue;
  display: none;
}

body::-webkit-scrollbar-thumb {
  background-color: #fff2;
  backdrop-filter: blur(5px);
  border-radius: 10px;
} */

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

  /* ul, ol{
    margin: 0;
    padding: 0;
  } */

  p{
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b{
    font-weight: bold;
  }

  /* h1, h2, h3, h4, h5, h6{
    margin: 0;
  } */

  a{
    text-decoration: none;
    color: inherit;
  }
`;