import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f9fafc;
  --secondary: #3b33a1;
  --danger: #c63635;

  font-family: Mulish;
}
  body {
    background-color: var(--background);
}

p, a, h1, h2, h3, h4, h5, h6 {
    margin: 0px;
    padding: 0px;
    font-family: Mulish;
}
`