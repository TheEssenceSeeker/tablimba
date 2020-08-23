import React, {useState, useEffect} from 'react'
import Tab from './Tab'
import playNote from "../sound/playNote"
import Kalimba from './Kalimba'
import playTab from "../sound/playTab"

const Tablimba = props => {
    const initialTab = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

    const [tuning, setTuning] = useState(props.tuning)
    const [tab, setTab] = useState(initialTab)
    const [tabName, setTabName] = useState('My melody')
    const [highlightedNotes, setHighlightedNotes] = useState([2, 5, 8, 11, 14])
    const [isKalimbaMinimized, setIsKalimbaMinimized] = useState(true)

    useEffect(() => {
        console.log('scrolling to bottom')
        window.scrollTo(0, document.body.scrollHeight)
    })

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
    const toggleHighlight = i => {
        setHighlightedNotes(prevState => {
            if (prevState.includes(i)) {
                return prevState.filter((item) => item !== i)
            } else {
                return [...prevState, i]
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
    const changeTuningNote = (event) => {
        const newNote = event.target.value
        const index = event.target.getAttribute('data-index')
        const oldNote = tuning[index]
        console.log('oldnote', oldNote)
        setTuning(prevState => prevState.map((note, i) => i === parseInt(index) ? newNote : note))
        setTab(prevState => prevState.map(note => note === oldNote ? newNote : note ))
    }
    const resetTuning = () => {
        setTuning(props.tuning)
    }
    const toggleKalimba = () => {
        setIsKalimbaMinimized(prevState => !prevState)
    }

    return (
        <>
            <div className="header">
                <h1>Tablimba - {tabName}</h1>
                <div className="kalibma-row">
                    <button onClick={resetTab} >Reset Tab</button>
                    <button onClick={resetTuning}>Reset tuning</button>
                    <button onClick={playMelody} >Play Tab</button>
                    <button onClick={addPause} >+</button>
                    <button onClick={toggleKalimba}>{!isKalimbaMinimized ? 'Minimize' : 'Show full'} kalimba</button>
                </div>
                <br/>
                <div className="kalibma-row">
                    {
                        tuning.map((note, i) =>
                            <div key={i} className={`tab-note-hint${highlightedNotes.includes(i) ? ' highlighted' : ''}`}>
                                <input className='tuning-note' type='text' value={note} key={i}
                                       onChange={changeTuningNote}
                                       data-index={i}
                                />
                                {/*{note}*/}
                            </div>)
                    }
                </div>
            </div>

            <div className="tab-container">
                <Tab
                    tab={tab}
                    tuning={tuning}
                    highlightedNotes={highlightedNotes}
                    editNote={editNote}
                    deleteRow={deleteRow}
                    insertRow={insertRow}
                />
            </div>

            <div className="footer">
                <Kalimba
                    tuning={tuning}
                    onPlayNote={addNote}
                    highlightedNotes={highlightedNotes}
                    onKeyRtClick={toggleHighlight}
                    minimized={isKalimbaMinimized}
                />
            </div>
        </>
    )
}

export default Tablimba