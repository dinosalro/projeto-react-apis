import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    /* available font-weight: 400, 500 and 700 */
  }

  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
`;
