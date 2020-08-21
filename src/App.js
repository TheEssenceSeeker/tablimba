import React from 'react'
import './App.css'
import Tablimba from './components/Tablimba'

function App() {
    const tuning = ['D6', 'B5', 'G5', 'E5', 'C5', 'A4', 'F4', 'D4', 'C4', 'E4', 'G4', 'B4', 'D5', 'F5', 'A5', 'C6', 'E6']

    return (
        <div className={'main-wrapper'}>
            <h1>Hello, I'm Tablimba!</h1>
            <h1>This is a working kalimba!</h1>

            <Tablimba tuning={tuning} />
        </div>
    );
}

export default App
