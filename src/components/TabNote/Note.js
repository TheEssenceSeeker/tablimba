import styled from 'styled-components'

const Note = styled.div`
  font-size: 35px;
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    font-size: 25px;
  }
  @media (max-width: 550px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`

export default Note