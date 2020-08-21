import React, {useState} from 'react'
import Tab from './Tab'
import playNote from "../sound/playNote"
import Kalimba from './Kalimba'
import playTab from "../sound/playTab"

const Tablimba = props => {
    const {tuning} = props
    const initialTab = []

    const [tab, setTab] = useState(initialTab)
    const [highlightedNotes, setHighlightedNotes] = useState(['A4', 'C4'])

    const addNote = note => {
        playNote(note)
        setTab(prevState => [...prevState, note])
    }

    const addPause = () => {
        setTab(prevState => [...prevState, ''])
    }

    const resetTab = () => {
        setTab(initialTab)
    }

    const playMelody = () => {
        playTab(tab)
    }

    const toggleHighlight = note => {
        setHighlightedNotes(prevState => {
            if (prevState.includes(note)) {
                return prevState.filter((item) => item !== note)
            } else {
                return [...prevState, note]
            }
        })
    }

    const editNote = (tabIndex, note) => {
        if (tabIndex >= tab.length || tabIndex < 0) {
            console.error('editNote(): index is out of range')
            return
        }
        const newNote = tab[tabIndex] === note ? '' : note
        setTab(prevState => prevState.map((note, i) => i === tabIndex ? newNote : note))
        playNote(newNote)
    }

    const deleteRow = (index) => {

    }

    return (
        <>

            <Tab tab={tab} tuning={tuning} highlightedNotes={highlightedNotes} editNote={editNote}></Tab>
            <Kalimba tuning={tuning} onPlayNote={addNote} highlightedNotes={highlightedNotes} onKeyRtClick={toggleHighlight}/>
            <div className="kalibma-row">
                <button onClick={resetTab} >Reset Tab</button>
                <button onClick={playMelody} >Play Tab</button>
                <button onClick={addPause} >+</button>
                <button onClick={() => editNote(tab.length - 1, 'C4')} >Change last note to C4</button>
            </div>
            {/*<div className="kalimba-row">*/}
            {/*    {tab.join('->')}*/}
            {/*</div>*/}
        </>
    )
}

export default Tablimba