import React from 'react'
import './App.css'
import Tablimba from './components/Tablimba'
import Synth from "./sound/Synth"
import SnackbarProvider from 'react-simple-snackbar'
import { ThemeProvider } from 'styled-components'
import theme from "./components/styled/theme"
import GlobalStyle from "./components/styled/global"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.tabJSON = JSON.parse(new URLSearchParams(window.location.search).get('tab'))
        this.tuning = ['D6', 'B5', 'G5', 'E5', 'C5', 'A4', 'F4', 'D4', 'C4', 'E4', 'G4', 'B4', 'D5', 'F5', 'A5', 'C6', 'E6']
        // this.tuning = ['D6', 'B5', 'G5', 'E5', 'C5', 'A4', 'F4', 'D4', 'C4']
        this.initialTab = new Array(40).fill('')
        this.synth = new Synth()
    }

    render = () => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackbarProvider>
            <div className={'main-wrapper'}>
                <Tablimba tuning={this.tuning} tabJSON={this.tabJSON} initialTab={this.initialTab} synth={this.synth} />
            </div>
        </SnackbarProvider>
      </ThemeProvider>
    )
}

export default App

