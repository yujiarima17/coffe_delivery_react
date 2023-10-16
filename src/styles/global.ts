import { createGlobalStyle } from "styled-components/dist/base";

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

   }
   body{
    background: ${(props)=>props.theme['background']};
    -webkit-font-smoothing:antialiased;
   }
`