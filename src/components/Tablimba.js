import React, {useState, useEffect} from 'react'
import Tab from './Tab'
import Kalimba from './Kalimba'
import Synth from '../sound/Synth'
import useHandleChange from "../hooks/useHandleChange"
import DurationEditor from "./DurationEditor"
import Button from "./Button"
import BrowseTextFileButton from "./BrowseTextFileButton"
import SaveTextFileButton from "./SaveTextFileButton"
import Input from "./Input"

const Tablimba = props => {
    const testTab = ['A4', 'B4', 'C5|2n', '|2n', 'C5', 'D5', 'E5|2n', '|2n',
                        'E5', 'G5', 'D5|2n', '|4n', 'E5|8n', 'D5|8n', 'C5|4n', 'B4|4n', 'A4|2n',
                        ...new Array(40).fill('')]
    const initialTab = new Array(40).fill('')
    const {playTab, playNote, getBpm, setBpm} = new Synth()

    const [tempo, _setTempo] = useState(getBpm())
    const [tuning, setTuning] = useState(props.tuning)
    const [tab, setTab] = useState(initialTab)
    const [tabName, setTabName] = useState('My melody')
    const [highlightedNotes, setHighlightedNotes] = useState([2, 5, 8, 11, 14])
    const [isKalimbaMinimized, setIsKalimbaMinimized] = useState(true)
    const [editorActiveDuration, handleEditorActiveDuration] = useHandleChange('4n')
    const [isAddBarOnScroll, handleIsAddBarOnScroll, isAddBarOnScrollRef] = useHandleChange(false)
    const [isAddRest, handleIsAddRest] = useHandleChange(false)
    const [isAddDot, handleIsAddDot] = useHandleChange(false)
    const [isNameEditorOpen, setIsNameEditorOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight)
        window.addEventListener("scroll", () => {
            if(window.scrollY === 0 && isAddBarOnScrollRef.current) {
                setTab(prevState => [...prevState, ...new Array(4).fill('')])
                window.scrollTo(0, 1)
            }
        })
    }, [])

    const setTempo = data => {
        setBpm(data)
        _setTempo(data)
    }
    const addNote = note => {
        playNote(note)
        // setTab(prevState => [...prevState, note])
    }
    // const addPause = () => {
    //     setTab(prevState => [...prevState, ''])
    // }
    const resetTab = () => {
        setTab(initialTab)
    }
    const playMelody = (index = 0) => {
        playTab(tab.slice(index))
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
    const editNote = (tabIndex, pitch) => {
        // console.log('editNote')
        if (tabIndex >= tab.length || tabIndex < 0) {
            console.error('editNote(): index is out of range')
            return
        }
        const newDuration = `${editorActiveDuration}${isAddDot ? '.' : ''}`
        const newPitch = isAddRest ? '' : pitch
        const newNote = `${newPitch}|${newDuration}`

        setTab(prevState => prevState.map((note, i) => i === tabIndex ? newNote : note))
        if(newPitch !== '') playNote(newPitch, newDuration)
    }
    const deleteRow = (index) => {
        setTab(prevState => prevState.filter((row, i) => i !== index))
    }
    const insertRow = (index) => {
        setTab(prevState => {
            let tab = prevState.slice()
            tab.splice(index, 0, '')
            return tab
        })
    }
    const changeTuningNote = (event) => {
        const newNote = event.target.value
        const index = event.target.getAttribute('data-index')
        const oldNote = tuning[index]
        setTuning(prevState => prevState.map((note, i) => i === parseInt(index) ? newNote : note))
        setTab(prevState => prevState.map(note => note === oldNote ? newNote : note ))
    }
    const resetTuning = () => {
        setTuning(props.tuning)
    }
    // const toggleKalimba = () => {
    //     setIsKalimbaMinimized(prevState => !prevState)
    // }
    const loadTab = (newTabStrJSON) => {
        const tabObj = JSON.parse(newTabStrJSON)
        setTuning(tabObj.tuning)
        setTab(tabObj.tab)
        setTempo(tabObj.tempo)
        setTabName(tabObj.tabName)
    }
    const handleNameEdit = e => {
        setTabName(e.target.value)
    }
    const renderTabTitle = () => {
        return (
            isNameEditorOpen
                ? <input className='input'
                         type="text" value={tabName}
                         onChange={handleNameEdit}
                         onBlur={() => setIsNameEditorOpen(false)}
                         onKeyDown={e => e.key === 'Enter' ? setIsNameEditorOpen(false) : null}
                         autoFocus={true}/>
                : <h1 onClick={() => setIsNameEditorOpen(true)}>Tablimba - {tabName}</h1>
        )
    }
    const renderTestButtons = () => {
        return (
            <div className="kalimba-row">
                <Button onClick={resetTab}>Reset Tab</Button>
                <Button onClick={() => setTab(testTab)}>Load test tab</Button>
                <Button onClick={resetTuning}>Reset Tuning</Button>
                <Button onClick={playMelody}><i className="fas fa-play"></i></Button>
                <SaveTextFileButton fileName={tabName}
                                    dataToSave={{tuning, tab, tempo, tabName}}
                                    extension='tbl'>
                    <i className="far fa-save"></i>
                </SaveTextFileButton>
                <BrowseTextFileButton extension='tbl' handleFile={loadTab}>
                    <i className="far fa-folder-open"></i>
                </BrowseTextFileButton>
                <div className="tempo">
                    <input className='input'
                           type='number'
                           value={tempo}
                           onChange={e => setTempo(+e.target.value)}/>
                </div>

                <label>
                    <input
                        name={'add-bar-on-scroll'}
                        type='checkbox'
                        checked={isAddBarOnScroll}
                        onChange={handleIsAddBarOnScroll}
                    />
                    Add bar on scroll
                </label>
            </div>
        )
    }

    return (
        <>
            <div className="header">
                {renderTabTitle()}
                {renderTestButtons()}
                <DurationEditor name='duration'
                                editorActiveDuration={editorActiveDuration}
                                onChange={handleEditorActiveDuration}
                                isDotChecked={isAddDot}
                                handleDotCheck={handleIsAddDot}
                                isRestChecked={isAddRest}
                                handleRestCheck={handleIsAddRest}
                />
                <br/>
                <div className="kalimba-row">
                    {
                        tuning.map((pitch, i) =>
                            <div key={i} className={`tab-note-hint${highlightedNotes.includes(i) ? ' highlighted' : ''}`}>
                                <input className='tuning-note' type='text' value={pitch} key={i}
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
                    playFromPos={playMelody}
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