import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
     * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
 
  button {
    cursor: pointer;
  }
  :root{
    font-size: 62.5%;
    --red: #F2A2A9;
    --blue: #948EBF;
    --white: #F2F2F2;
    --black: #0D0D0D

}
  background-color: var(--cinza);
     
`