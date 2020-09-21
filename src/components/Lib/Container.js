import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  //justify-content: center;
  max-width: 99%;
  width: ${p => p.tuning ? 800 * p.tuning.length / 17 : 800}px;
  position: relative;
`

export default Container
