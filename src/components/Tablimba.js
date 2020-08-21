import React, {useState} from 'react'
import Tab from './Tab'
import playNote from "../sound/playNote"
import Kalimba from './Kalimba'

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

    const deleteRow = (index) => {

    }

    return (
        <>

            <Kalimba tuning={tuning} onPlayNote={onPlayNote} />
            <div className="kalibma-row">
                <button onClick={resetTab} >Reset Tab</button>
            </div>
            <div className="kalimba-row">
                {tab.join('->')}
            </div>
            <Tab tab={tab} tuning={tuning}></Tab>
        </>
    )
}

export default Tablimba