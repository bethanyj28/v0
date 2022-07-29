import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root,
  ::before {
    --primary-bg: #FFFFFF;
    --secondary-bg: #757575;
    --primary-text: #000000;
    --secondary-text: #696665;
    --highlight-text: #D300C3;
  }

  [data-theme="dark"] {
    --primary-bg: #000000;
    --secondary-bg: #757575;
    --primary-text: #FFFFFF;
    --secondary-text: #BBBBBB;
    --highlight-text: #D300C3;
  }

  [data-theme="dark"] ::before {
    --primary-bg: #000000;
    --secondary-bg: #757575;
    --primary-text: #FFFFFF;
    --secondary-text: #BBBBBB;
    --highlight-text: #D300C3;
  }

  body {
    background: var(--primary-bg);
    color: var(--primary-text);
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
