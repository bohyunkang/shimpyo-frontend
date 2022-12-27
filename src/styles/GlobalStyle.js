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

`;

export default GlobalStyle;
