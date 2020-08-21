import React, {useState} from 'react'
import Tab from './Tab'
import playNote from "../sound/playNote"
import Kalimba from './Kalimba'
import playTab from "../sound/playTab"

const Tablimba = props => {
    const {tuning} = props
    const initialTab = []

    const [tab, setTab] = useState(initialTab)
    const [tabName, setTabName] = useState('My melody')
    const [highlightedNotes, setHighlightedNotes] = useState(['G5', 'A4', 'C4', 'B4', 'A5'])

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
        if(newNote !== '') playNote(newNote)
    }

    const deleteRow = (index) => {
        setTab(prevState => prevState.filter((row, i) => i !== index))
    }

    const insertRow = (index) => {
        setTab(prevState => {
            let tab = prevState.slice()
            tab.splice(index, 0, [''])
            return tab
        })
    }

    const handleTextTabChange = (event) => {
        const [name, tab] = event.target.value.trim().split('|')
        console.log(`name ${name} tab ${tab}`)
        setTabName(name)
        setTab(tab.split(','))
    }

    return (
        <>
        <h1>Tablimba<br/>-<br/>{tabName}</h1>
            <div className="kalibma-row">
                <button onClick={resetTab} >Reset Tab</button>
                <button onClick={playMelody} >Play Tab</button>
                <button onClick={addPause} >+</button>
            </div>
            <div className="kalimba-row">
                <textarea value={tab} onChange={handleTextTabChange} />
            </div>
            <br/>
            <div className="kalibma-row">
                {
                    tuning.map((note, i) =>
                        <div key={i} className={`tab-note-hint${highlightedNotes.includes(note) ? ' highlighted' : ''}`}>
                            {note}
                        </div>)
                }
            </div>
            <Tab tab={tab} tuning={tuning} highlightedNotes={highlightedNotes} editNote={editNote} deleteRow={deleteRow} insertRow={insertRow}></Tab>
            <Kalimba tuning={tuning} onPlayNote={addNote} highlightedNotes={highlightedNotes} onKeyRtClick={toggleHighlight}/>
        </>
    )
}

export default Tablimba