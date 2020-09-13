import styled from 'styled-components'

export const RowFloatingButton = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 20px;
  right: -20px;
  transition: all .25s ease;
  opacity: 0;
  cursor: pointer;
  font-size: 30px;
  @media (max-width: 900px) {
    display: none;
  }
`

export const DelButton = styled(RowFloatingButton)`
  right: -28px;
  color: ${p => p.theme.highlight};
`

export const AddButton = styled(RowFloatingButton)`
  right: -60px;
  color: #078f5c;
`

export const PlayButton = styled(RowFloatingButton)`
  left: -35px;
  color: ${p => p.theme.accent};
`

export default RowFloatingButton