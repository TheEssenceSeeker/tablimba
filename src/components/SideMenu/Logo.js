import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 100%;
  height: 12rem;
  //border: 1px solid #000;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom: 1px solid #000;
`

const LogoText = styled.div`
  font-size: 3rem;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoText>
        TABLIMBA
      </LogoText>

    </LogoContainer>
  )
}

export default Logo
