import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${(({ theme }) => theme.textColors.default)};
    background-color: ${(({ theme }) => theme.colors.dimmed)};
    font-size: 16px;
  }
  
  a {
    color: ${(({ theme }) => theme.textColors.default)};
    text-decoration: none;
  }
  
  input {
    border: none;

    :focus {
      outline: none;
    }
  }

  button {
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
  }

`;

export default GlobalStyle;
