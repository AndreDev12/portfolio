import { createGlobalStyle } from 'styled-components';

interface ThemeType {
  colors: {
    black: string;
    blackBoxShadow: string;
    darkBlue: string;
    darkPurple: string;
    gray: string;
    purple: string;
    purpleLight: string;
    white: string;
  };
  fonts: {
    family: string;
    weights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
  };
  breakpoints: {
    tablet: string;
    desktop: string;
  };
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html{
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after{
    box-sizing: inherit;
  }

  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: ${({ theme }) => theme.colors.darkBlue};
    font-family: ${({ theme }) => theme.fonts.family};
  }
  
  #root{
    position: relative;
  }

  ::-webkit-scrollbar{
    width: 1rem;
  }

  ::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.colors.darkBlue};
  }

  ::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 1rem;
      &:hover{
        background: ${({ theme }) => theme.colors.purpleLight};
        border-radius: 1rem;
      }
  }

  img{
    display: block;
    width: 100%;
  }

  li{
    list-style: none;
  }

  p{
    font-size: 1rem;
    line-height: 1.7rem;
    margin: 1rem 0;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`;
