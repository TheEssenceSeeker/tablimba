import React from 'react'
import styled from 'styled-components'

const KalimbaKey = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  width: 20px;
  height: 100px;
  background-color: ${props => props.isHighlighted ? props.theme.highlight : props.theme.white};
  border: 1px solid #000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 10px;
  margin-right: 5px;
  user-select: none;
  font-size: 12px;
  cursor:pointer;
  
  &:last-child {
  margin-right: 0;
  }
`

const Key = props => {
    const {note, height, onPlayNote, isHighlighted, onKeyRtClick, index} = props

    return (
        <KalimbaKey isHighlighted={isHighlighted}
                    onClick={() => onPlayNote(note)}
                    onContextMenu={e => {
                        e.preventDefault()
                        onKeyRtClick(index)
                    }}
                    style={{height: height}}
        >
            {note}
        </KalimbaKey>
    )
}
export default Key
