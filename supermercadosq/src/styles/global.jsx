import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #FCFCFC;
    --color-green: #9CDD6E;
    --color-green-light: #9CDD6E;
    --color-yellow-light: #FFF66B;
    --color-red: #F66A69;
    --color-mustard: #F59E1D;
    --color-blue-ciel: #9cdbe7;
    --color-blue-light: #3EBCD3;
    --color-brown: #C87C53;
    --color-black: #020000;
    --color-gray: #858585;
    --color-gray-light: #e9ebed;
    --color-white: #FFF;
    --color-purple: #9F6EDD;

    --items: 5;
    --middle: 3;
    --position: 1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html{
    scroll-behavior: smooth;
    @media(max-width: 1080px){
      font-sizing: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-sizing: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-white);
    border-radius: 13px;

  }

  *::-webkit-scrollbar-thumb {

    background-color: var(--color-gray);
    border-radius: 13px;
    border: 3px solid var(--color-white);
  }

  * {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray-light) var(--color-white);
  }

`;
