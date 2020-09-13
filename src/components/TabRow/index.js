import React from 'react'
import TabNote from "../TabNote/"
import styled from 'styled-components'
import {Menu, Item, Separator, Submenu, contextMenu, IconFont} from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css'
import TabRowContainer from "./TabRowContainer";
import {AddButton, DelButton, PlayButton} from "./FloatingButtons";

const TabRowMenu = ({index, deleteRow, insertRow, playFromPos}) => (
    <Menu id={`tab_row_menu_${index}`}>
        <Item onClick={() => playFromPos(index)}><IconFont style={{color: "deepskyblue"}} className="fas fa-play-circle lg"/> Play from this position</Item>
        <Separator />
        <Item onClick={() => insertRow(index)}><IconFont style={{color: "#078f5c"}} className="fas fa-plus-circle fa-lg"/>Insert a row before</Item>
        <Item onClick={() => deleteRow(index)}><IconFont style={{color: "#ff7575"}} className="fas fa-times-circle fa-lg"/>Delete row</Item>
    </Menu>
);


const TabRow = ({note, tuning, highlightedNotes, editNote, index, deleteRow, insertRow, playFromPos}) => {
    const isFilled = (pitch, i) => note.pitch !== '' ? pitch === note.pitch : i === Math.floor(tuning.length / 2)

    return (
        <>
            <TabRowContainer onContextMenu={e => {
                e.preventDefault()
                contextMenu.show({id: `tab_row_menu_${index}`, event: e})
            }}>
                <DelButton className="fas fa-times-circle" onClick={() => deleteRow(index)} title={'Delete this row'}/>
                <AddButton className="fas fa-plus-circle" onClick={() => insertRow(index)} title={'Add a new row'}/>
                <PlayButton className="fas fa-play-circle" onClick={() => playFromPos(index)} title={'Play tab from this position'}/>
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
            <TabRowMenu index={index} deleteRow={deleteRow} insertRow={insertRow} playFromPos={playFromPos} />
        </>
    )
}
export default TabRow