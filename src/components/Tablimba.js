import React, {useState, useEffect, useRef} from 'react'
import Tab from './Tab'
import Kalimba from './Kalimba'
import Synth from '../sound/Synth'
import useHandleChange from "../hooks/useHandleChange"
import DurationEditor from "./DurationEditor"
import Button from "./Button"
import BrowseTextFileButton from "./BrowseTextFileButton"
import SaveTextFileButton from "./SaveTextFileButton"
import TunableNote from "./TunableNote"
import Checkbox from "./Checkbox"
import TuningRow from "./TuningRow"
import InputTempo from "./InputTempo"
import EditableSpan from "./EditableSpan";
import Input from "./Input";

const Tablimba = props => {
    const testTab = ['A4', 'B4', 'C5|2n', '|2n', 'C5', 'D5', 'E5|2n', '|2n',
                        'E5', 'G5', 'D5|2n', '|4n', 'E5|8n', 'D5|8n', 'C5|4n', 'B4|4n', 'A4|2n', ...new Array(20).fill('')]
    const initialTab = new Array(40).fill('')
    const {playTab, playNote, getBpm, setBpm, transposeNote} = new Synth()

    const [tempo, _setTempo] = useState(getBpm())
    const [tuning, setTuning] = useState(props.tuning)
    const [tab, setTab] = useState(initialTab)
    const [tabName, setTabName] = useState('My melody')
    const [highlightedNotes, setHighlightedNotes] = useState([2, 5, 8, 11, 14])
    const [isKalimbaMinimized, setIsKalimbaMinimized] = useState(true)
    const [isLoaded, setIsLoaded] = useState(true)

    const [editorActiveDuration, handleEditorActiveDuration] = useHandleChange('4n')
    const [isAddRest, handleIsAddRest] = useHandleChange(false)
    const [isAddDot, handleIsAddDot] = useHandleChange(false)
    const [isShowTuneControls, handleIsShowTuneControls] = useHandleChange(false)
    const editTabNameRef = useRef(tabName)

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
        setTab(initialTab)
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
        setTuning(tabObj.tuning)
        setTab(tabObj.tab)
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
    const renderTabTitle = () => {
        return (
            <h1 className='tab-title'>
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
                                  text={<i className="fas fa-cog"></i>} />
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