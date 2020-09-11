import React from 'react'
import TabNote from "./TabNote"
import styled from 'styled-components'

const RowButton = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 20px;
  width: 20px;
  right: -20px;
  transition: all .25s ease;
  opacity: 0;
  cursor: pointer;
`

const TabRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  background-color: inherit;
  
  &:hover{
    background-color: ${p => p.theme.accent};
    transition: background-color .25s ease;
  }
  
  &:hover ${RowButton} {
    opacity: 1;
  }
`

const DelButton = styled(RowButton)`
  right: -22px;
  color: ${p => p.theme.highlight};
`

const AddButton = styled(RowButton)`
  right: -44px;
  color: #078f5c;
`

const PlayButton = styled(RowButton)`
  left: -35px;
  color: ${p => p.theme.accent};
`

const TabRow = ({note, tuning, highlightedNotes, editNote, index, deleteRow, insertRow, playFromPos}) => {
    const isFilled = (pitch, i) => note.pitch !== '' ? pitch === note.pitch : i === Math.floor(tuning.length / 2)

    return (
        <TabRowContainer>
            <DelButton className="fas fa-times-circle fa-lg" onClick={() => deleteRow(index)} title={'Delete this row'}/>
            <AddButton className="fas fa-plus-circle fa-lg" onClick={() => insertRow(index)} title={'Add a new row'}/>
            <PlayButton className="fas fa-play-circle fa-lg" onClick={() => playFromPos(index)} title={'Play tab from this position'}/>
            {
                tuning.map((pitch, i) => (
                    <TabNote filled={isFilled(pitch, i)}
                             note={note}
                             pitch={pitch}
                             key={i}
                             isHighlighted={highlightedNotes.includes(i)}
                             editNote={editNote}
                             index={index}
                    />
                    ))
            }
        </TabRowContainer>
    )
}
export default TabRow