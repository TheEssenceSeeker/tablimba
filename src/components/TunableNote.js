import React from 'react'
import styled from 'styled-components'

const TunableNoteContainer = styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  align-items:center;
`

const Note = styled.div`
  position:relative;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  font-size: 14px;
  background-color: ${props => props.isHighlighted ? props.theme.highlight : props.theme.white};
  margin: 0px 2px;
  border-radius: 0;
  user-select: none;
`

const TuneButton = styled.button`
  position:absolute;
  width: 25px;
  height: 25px;
  border:none;
  outline: none;
  border: 1px solid #000;
  display: ${props => props.isShowControls ? 'block' : 'none'};
  background-color: #fff;
  cursor:pointer;
`

const ButtonUp = styled(TuneButton)`
  top: -25px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`

const ButtonDown = styled(TuneButton)`
  bottom: -25px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`

const TunableNote = props => {
    const {pitch, index, onTranspose, isShowControls, isHighlighted} = props

    return (
        <TunableNoteContainer >
            <ButtonUp isShowControls={isShowControls} onClick={() => onTranspose(index, 1)}>
                <i className="fas fa-chevron-up fa-xs"/>
            </ButtonUp>
            <Note isHighlighted={isHighlighted} isShowControls={isShowControls}>
                {pitch}
            </Note>
            <ButtonDown isShowControls={isShowControls} onClick={() => onTranspose(index, -1)}>
                <i className="fas fa-chevron-down fa-xs"/>
            </ButtonDown>
        </TunableNoteContainer>
    )
}

export default TunableNote
