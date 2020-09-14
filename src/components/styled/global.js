import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    //font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    //font-family: 'Raleway', sans-serif;
    //font-family: 'Roboto Condensed', sans-serif;
    font-family: 'Grandstander', cursive;
    font-size: 20px;
    box-sizing: border-box;
    @media (max-width: 740px) {
      font-size: 18px;
    }
    @media (max-width: 650px) {
      font-size: 16px;
    }
    @media (max-width: 560px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
    //@media (max-width: 400px) {
    //  font-size: 15px;
    //}
  }
  
  html {
    overflow-y: scroll;
  }
    
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  
  div[class^="Snackbar_snackbar-wrapper"] {
      z-index: 10;
    }

`

export default GlobalStyle