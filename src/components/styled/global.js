import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      font-size: 15px;
      font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
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
`

export default GlobalStyle