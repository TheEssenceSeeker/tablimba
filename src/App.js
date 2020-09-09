import React from 'react'
import './App.css'
import Tablimba from './components/Tablimba'
import {ThemeProvider} from "styled-components"
import theme from "./components/styled/theme"

function App() {
    const tuning = ['D6', 'B5', 'G5', 'E5', 'C5', 'A4', 'F4', 'D4', 'C4', 'E4', 'G4', 'B4', 'D5', 'F5', 'A5', 'C6', 'E6']

    return (
        <div className={'main-wrapper'}>
            <ThemeProvider theme={theme}>
                <Tablimba tuning={tuning} />
            </ThemeProvider>
        </div>
    );
}

export default App
