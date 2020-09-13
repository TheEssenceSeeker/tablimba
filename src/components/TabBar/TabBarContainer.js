import styled, {css} from 'styled-components'

const TabBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  
  ${p => p.hasError
    ? css`
            background-color: ${p.theme.error};
          `
    : css`
            background-color: ${p.theme.white};
            &:nth-child(2n) {
              background-color: #c8c8c8;
            }
          `
}
`

export default TabBarContainer