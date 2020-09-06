import React, {useState, useEffect} from 'react'
import Tab from './Tab'
import Kalimba from './Kalimba'
import Synth from '../sound/Synth'
import useHandleChange from "../hooks/useHandleChange"

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
    const renderSaveTabBtn = (fileName = tabName, btnText = 'Save') => {
        const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({tuning, tab, tempo, tabName}))
        return <a href={`data: ${data}`} download={`${fileName}.tbl`}>{btnText}</a>
    }
    const renderLoadTab = () => {
        const handleChange = e => {
            let reader = new FileReader()
            reader.readAsText(e.target.files[0])
            reader.onload = () => {
                loadTab(reader.result)
            }
            e.target.value = null
        }
        return <input type={'file'} accept=".tbl" onChange={handleChange} />
    }
    const handleNameEdit = e => {
        setTabName(e.target.value)
    }

    return (
        <>
            <div className="header">
                {
                    isNameEditorOpen
                        ? <input type="text" value={tabName}
                                 onChange={handleNameEdit}
                                 onBlur={() => setIsNameEditorOpen(false)}
                                 onKeyDown={e => e.key === 'Enter' ? setIsNameEditorOpen(false) : null}
                                 autoFocus={true}/>
                        : <h1 onClick={() => setIsNameEditorOpen(true)}>Tablimba - {tabName}</h1>
                }
                <div className="kalibma-row">
                    <button onClick={resetTab} >Reset Tab</button>
                    <button onClick={() => setTab(testTab)} >Load test tab</button>
                    <button onClick={resetTuning}>Reset tuning</button>
                    <button onClick={playMelody} >Play Tab</button>
                    {renderSaveTabBtn()}
                    {renderLoadTab()}
                    <input type='number' id={'tempo'} name={'setTempo'} value={tempo} onChange={e => setTempo(+e.target.value)} />
                    <label>
                        <input
                            name={'add-bar-on-scroll'}
                            type='checkbox'
                            checked={isAddBarOnScroll}
                            onChange={handleIsAddBarOnScroll}
                        />
                        Add bar on scroll
                    </label>
                    {/*<button onClick={addPause} >+</button>*/}
                    {/*<button onClick={toggleKalimba}>{!isKalimbaMinimized ? 'Minimize' : 'Show full'} kalimba</button>*/}
                </div>
                <div className="kalibma-row duration-editor">
                    <label>
                        <input type="radio" name="duration" value="1n" checked={editorActiveDuration === '1n'} onChange={handleEditorActiveDuration} />𝅝
                    </label>
                    <label>
                        <input type="radio" name="duration" value="2n" checked={editorActiveDuration === '2n'} onChange={handleEditorActiveDuration} />𝅗𝅥
                    </label>
                    <label>
                        <input type="radio" name="duration" value="4n" checked={editorActiveDuration === '4n'} onChange={handleEditorActiveDuration} />𝅘𝅥
                    </label>
                    <label>
                        <input type="radio" name="duration" value="8n" checked={editorActiveDuration === '8n'} onChange={handleEditorActiveDuration} />𝅘𝅥𝅮
                    </label>
                    <label>
                        <input type="radio" name="duration" value="16n" checked={editorActiveDuration === '16n'} onChange={handleEditorActiveDuration} />𝅘𝅥𝅯
                    </label>
                    <label>
                        <input type="radio" name="duration" value="32n" checked={editorActiveDuration === '32n'} onChange={handleEditorActiveDuration} />𝅘𝅥𝅰
                    </label>
                    <label>
                        <input type="radio" name="duration" value="64n" checked={editorActiveDuration === '64n'} onChange={handleEditorActiveDuration} />𝅘𝅥𝅱
                    </label>
                    <label>
                        <input type="checkbox" checked={isAddDot} onChange={handleIsAddDot} />
                        Dot
                    </label>
                    <label>
                        <input type="checkbox" checked={isAddRest} onChange={handleIsAddRest} />
                        Rest
                    </label>
                </div>
                <br/>
                <div className="kalibma-row">
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