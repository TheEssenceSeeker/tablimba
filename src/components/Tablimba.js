import React, {useState} from 'react'
import Tab from './Tab'
import playNote from "../sound/playNote"
import Kalimba from './Kalimba'
import playTab from "../sound/playTab"

const Tablimba = props => {
    const {tuning} = props
    const initialTab = []

    const [tab, setTab] = useState(initialTab)

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

    const deleteRow = (index) => {

    }

    return (
        <>
            <Tab tab={tab} tuning={tuning}></Tab>
            <Kalimba tuning={tuning} onPlayNote={onPlayNote} />
            <div className="kalibma-row">
                <button onClick={resetTab} >Reset Tab</button>
                <button onClick={playMelody} >Play Tab</button>
            </div>
            {/*<div className="kalimba-row">*/}
            {/*    {tab.join('->')}*/}
            {/*</div>*/}
        </>
    )
}

export default Tablimba