import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration:none;
    
    font-family: 'Grandstander', cursive;
    font-size: 20px;
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