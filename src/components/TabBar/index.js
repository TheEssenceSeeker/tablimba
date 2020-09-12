import React from 'react'
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

const BarNumber = styled.div`
  position: absolute;
  left: -15px;
  top: -8px;
  font-size: 9px;
  width: 15px;
  text-align: center;
  
  ${TabBarContainer}:last-child & {
    top: 0;
  }
`

const TabBar = (props) => {
    const {number, hasError = false} = props
    return (
        <TabBarContainer hasError={hasError}>
            <BarNumber>{number}</BarNumber>
            {props.children}
        </TabBarContainer>
    )
}

export default TabBar