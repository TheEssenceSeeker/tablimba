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

    const onPlayNote = note => {
        playNote(note)
        setTab(prevState => [...prevState, note])
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

    const deleteRow = (index) => {

    }

    return (
        <>
            <Tab tab={tab} tuning={tuning} highlightedNotes={highlightedNotes}></Tab>
            <Kalimba tuning={tuning} onPlayNote={onPlayNote} highlightedNotes={highlightedNotes} onKeyRtClick={toggleHighlight}/>
            <div className="kalibma-row">
                <button onClick={resetTab} >Reset Tab</button>
                <button onClick={playMelody} >Play Tab</button>
                <button onClick={() => {
                    toggleHighlight('C4')
                }
                } >Toggle C4</button>
            </div>
            {/*<div className="kalimba-row">*/}
            {/*    {tab.join('->')}*/}
            {/*</div>*/}
        </>
    )
}

export default Tablimba