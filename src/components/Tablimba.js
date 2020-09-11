import React, {useState, useEffect, useRef} from 'react'
import Tab from './Tab'
import Kalimba from './Kalimba'
import useHandleChange from "../hooks/useHandleChange"
import DurationEditor from "./DurationEditor"
import Button from "./Button"
import BrowseTextFileButton from "./BrowseTextFileButton"
import SaveTextFileButton from "./SaveTextFileButton"
import { useSnackbar } from 'react-simple-snackbar'
import TunableNote from "./TunableNote"
import Checkbox from "./Checkbox"
import TuningRow from "./TuningRow"
import InputTempo from "./InputTempo"
import EditableSpan from "./EditableSpan"

const Tablimba = props => {
    const {playTab, playNote, getBpm, setBpm, transposeNote} = props.synth
    
    const getParamFromJSON = (name, defaultValue) => props.tabJSON ? props.tabJSON[name] : defaultValue

    const [tempo, _setTempo] = useState(getParamFromJSON('tempo', getBpm()))
    const [tuning, setTuning] = useState(getParamFromJSON('tuning', props.tuning))
    const [tab, setTab] = useState(getParamFromJSON('tab', props.initialTab))
    const [tabName, setTabName] = useState(getParamFromJSON('tabName', 'My melody'))
    const [highlightedNotes, setHighlightedNotes] = useState([2, 5, 8, 11, 14])
    const [isKalimbaMinimized, setIsKalimbaMinimized] = useState(true)
    const [isLoaded, setIsLoaded] = useState(true)

    const [editorActiveDuration, handleEditorActiveDuration] = useHandleChange('4n')
    const [isAddRest, handleIsAddRest] = useHandleChange(false)
    const [isAddDot, handleIsAddDot] = useHandleChange(false)
    const [isShowTuneControls, handleIsShowTuneControls] = useHandleChange(false)
    const editTabNameRef = useRef(tabName)

    const [openSnackbar, closeSnackbar] = useSnackbar()

    useEffect(() => {
        if (isLoaded) {
            window.scrollTo(0, document.body.scrollHeight)
            setIsLoaded(false)
        }
    }, [isLoaded])

    const setTempo = data => {
        let newTempo = +data
        if (newTempo < 1) {
            newTempo = 1
        } else if (newTempo > 400) {
            newTempo = 400
        }
        setBpm(newTempo)
        _setTempo(newTempo)
    }
    const resetTab = () => {
        setTab(props.initialTab)
        setIsLoaded(true)
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
        if (tabIndex > tab.length - 4) {
            setTab(prevState => [...prevState, ...new Array(4).fill('')])
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
    const tuneNote = (index, interval) => {
        const newNote = transposeNote(tuning[index], interval)
        setTuning(prevState => prevState.map((note, i) => i === parseInt(index) ? newNote : note))
    }
    const resetTuning = () => {
        setTuning(props.tuning)
    }
    // const toggleKalimba = () => {
    //     setIsKalimbaMinimized(prevState => !prevState)
    // }
    const loadTab = (newTabStrJSON) => {
        const tabObj = JSON.parse(newTabStrJSON)
        setTab(tabObj.tab)
        setTuning(tabObj.tuning)
        setTempo(tabObj.tempo)
        setTabName(tabObj.tabName)
        setIsLoaded(true)
    }
    const selectFirstChild = e => {
        let range = new Range()
        range.setStart(e.target, 0)
        range.setEnd(e.target, 1)
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
    }
    const shareTab = () => {
        let link = window.location.origin
        link += `?tab=${JSON.stringify({tuning, tab, tempo, tabName})}`
        navigator.clipboard.writeText(encodeURI(link))
            .then(() => openSnackbar('Link successfully copied to clipboard', 3000))
            .catch(e => openSnackbar('Error copying link to clipboard ' + e, 3000))
    }

    const renderTabTitle = () => {
        return (
            <h1>
                Tablimba -<EditableSpan
                                 onBlur={e => setTabName(e.currentTarget.textContent)}
                                 onKeyDown={e => e.key === 'Enter' ? console.log(e.currentTarget.blur()) : null}
                                 contentEditable
                                 suppressContentEditableWarning={true}
                                 ref={editTabNameRef}
                                 onFocus={selectFirstChild}
            >{tabName}</EditableSpan>
                <i className="fas fa-edit tab-title__edit-icon"
                   onClick={() => editTabNameRef.current.focus()}/>
            </h1>
        )
    }
    const renderTestButtons = () => {
        return (
            <div className="kalimba-row">

                <BrowseTextFileButton title={'Open saved tab file (.tbl)'} extension='tbl' handleFile={loadTab}>
                    <i className="far fa-folder-open"/>
                </BrowseTextFileButton>
                <SaveTextFileButton title={'Save current tab into a file'}
                                    fileName={tabName}
                                    dataToSave={{tuning, tab, tempo, tabName}}
                                    extension='tbl'>
                    <i className="far fa-save"/>
                </SaveTextFileButton>
                <Button onClick={shareTab} title={'Copy link to this tab to share it'}><i className="fas fa-link"></i></Button>
                <Button onClick={resetTab} title={'Reset current tab'}>Reset Tab</Button>
                <Button onClick={playMelody} title={'Play current tab'}><i className="fas fa-play"/></Button>
                <Button onClick={resetTuning} title={'Reset tuning'}>Reset Tuning</Button>
                <InputTempo title={'Set tempo (bpm)'} value={tempo} onChange={e => setTempo(+e.target.value)} />
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
                    <TuningRow>
                        {
                            tuning.map((pitch, i) => (
                                <TunableNote key={i}
                                             pitch={pitch}
                                             index={i}
                                             onTranspose={tuneNote}
                                             isShowControls={isShowTuneControls}
                                             isHighlighted={highlightedNotes.includes(i)}
                                />
                            ))
                        }
                        <Checkbox title={'Edit tuning'}
                                  checked={isShowTuneControls}
                                  onChange={handleIsShowTuneControls}
                                  text={<i className="fas fa-cog"/>} />
                    </TuningRow>
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