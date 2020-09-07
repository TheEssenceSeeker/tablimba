import React, {useState, useEffect, useRef} from 'react'
import Tab from './Tab'
import Kalimba from './Kalimba'
import Synth from '../sound/Synth'
import useHandleChange from "../hooks/useHandleChange"
import DurationEditor from "./DurationEditor"
import Button from "./Button"
import BrowseTextFileButton from "./BrowseTextFileButton"
import SaveTextFileButton from "./SaveTextFileButton"

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
    const editTabNameRef = useRef(tabName)

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
    const selectFirstChild = e => {
        let range = new Range()
        range.setStart(e.target, 0)
        range.setEnd(e.target, 1)
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
    }
    const renderTabTitle = () => {
        return (
            <h1 className='tab-title'>
                Tablimba -<span className='editable-span'
                                 onBlur={e => setTabName(e.currentTarget.textContent)}
                                 onKeyDown={e => e.key === 'Enter' ? console.log(e.currentTarget.blur()) : null}
                                 contentEditable
                                 suppressContentEditableWarning={true}
                                 ref={editTabNameRef}
                                 onFocus={selectFirstChild}
            >{tabName}</span>
                <i className="fas fa-edit tab-title__edit-icon"
                   onClick={() => editTabNameRef.current.focus()}/>
            </h1>
        )
    }
    const renderTestButtons = () => {
        return (
            <div className="kalimba-row">
                <Button onClick={resetTab}>Reset Tab</Button>
                <Button onClick={() => setTab(testTab)}>Load test tab</Button>
                <Button onClick={resetTuning}>Reset Tuning</Button>
                <Button onClick={playMelody}><i className="fas fa-play"/></Button>
                <SaveTextFileButton fileName={tabName}
                                    dataToSave={{tuning, tab, tempo, tabName}}
                                    extension='tbl'>
                    <i className="far fa-save"/>
                </SaveTextFileButton>
                <BrowseTextFileButton extension='tbl' handleFile={loadTab}>
                    <i className="far fa-folder-open"/>
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
                    onPlayNote={playNote}
                    highlightedNotes={highlightedNotes}
                    onKeyRtClick={toggleHighlight}
                    minimized={isKalimbaMinimized}
                />
            </div>
        </>
    )
}

export default Tablimba