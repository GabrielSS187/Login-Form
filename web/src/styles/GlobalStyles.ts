import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    //* Colors
    --message-error: #f23838;
    --message-success: #66FF00;
    --text: #fff;
    
    //* Form Cadaster
    --box-shadow: #000;
    --background-color-inputs: #e0dede;
    --background-color-buttons:  #573b8a;
    --background-color-buttons-hover:  #6d44b8;

    //* Form login
    --background-color-login:  #eee;
}

  .h1-not-found {
    text-align: center;
    padding-top: 20px;
  }

`;