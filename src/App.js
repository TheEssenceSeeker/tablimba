import React from 'react'
import './App.css'
import Tablimba from './components/Tablimba/'
import Synth from "./sound/Synth"
import SnackbarProvider from 'react-simple-snackbar'
import { ThemeProvider } from 'styled-components'
import theme from "./components/styled/theme"
import GlobalStyle from "./components/styled/global"
import {TuningContextProvider} from "./contexts/tuningContext"
import MainWrapper from "./components/Lib/MainWrapper"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.tabJSON = JSON.parse(new URLSearchParams(window.location.search).get('tab'))
        this.tuning = ['D6', 'B5', 'G5', 'E5', 'C5', 'A4', 'F4', 'D4', 'C4', 'E4', 'G4', 'B4', 'D5', 'F5', 'A5', 'C6', 'E6']

        this.initialTab = new Array(40).fill('')
        this.synth = new Synth()
    }

    render = () => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackbarProvider>
            <MainWrapper>
                <TuningContextProvider initialTuning={this.tabJSON ? this.tabJSON['tuning'] : this.tuning}>
                    <Tablimba tabJSON={this.tabJSON} initialTab={this.initialTab} synth={this.synth} />
                </TuningContextProvider>
            </MainWrapper>
        </SnackbarProvider>
      </ThemeProvider>
    )
}

export default App

