import React from 'react'
import styled from 'styled-components'
import TablimbaCell from "../Lib/TablimbaCell"

const KalimbaKey = styled(TablimbaCell)`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  height: calc(2rem + ${p => p.deltaH}rem);
  background-color: ${props => props.isHighlighted ? props.theme.highlight : props.theme.white};
  border: 1px solid #000;
  border-radius: 0 0 500px 500px;
  padding-bottom: 10px; 
  user-select: none;
  font-size: 0.9rem;
  cursor:pointer;
`

const Key = props => {
    const {note, deltaH, onPlayNote, isHighlighted, onKeyRtClick, index} = props

    return (
        <KalimbaKey isHighlighted={isHighlighted}
                    onClick={() => onPlayNote(note)}
                    onContextMenu={e => {
                        e.preventDefault()
                        onKeyRtClick(index)
                    }}
                    deltaH={deltaH}
        >
            {note}
        </KalimbaKey>
    )
}
export default Key
