import React from 'react'
import styled from 'styled-components'
import TablimbaCell from "../Lib/TablimbaCell";

const TunableNoteContainer = styled(TablimbaCell)`
  position:relative;
  display:flex;
  flex-direction: column;
  align-items:center;
`

const Note = styled.div`
  position:relative;
  display: inline-flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  //height: 100%;
  height: 2rem;
  border: 1px solid #000;
  font-size: 0.9rem;
  background-color: ${props => props.isHighlighted ? props.theme.highlight : props.theme.white};
  border-radius: 0;
  user-select: none;
  &::before {
    content:'';
    float:left;
    padding-top:100%;
  }
`

const TuneButton = styled.button`
  position:absolute;
  width: 100%;
  height: 50%;
  outline: none;
  border: 1px solid #000;
  display: ${props => props.isShowControls ? 'block' : 'none'};
  background-color: #fff;
  cursor:pointer;
`

const ButtonUp = styled(TuneButton)`
  top: -50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  z-index: 1;
`

const ButtonDown = styled(TuneButton)`
  bottom: -50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
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
