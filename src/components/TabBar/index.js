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
  left: -25px;
  top: -7px;
  font-size: 12px;
  width: 15px;
  text-align: center;
  z-index: 1;
  
  ${TabBarContainer}:last-child & {
    top: 0;
  }
  
  @media (max-width: 850px) {
    left: 3px;
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