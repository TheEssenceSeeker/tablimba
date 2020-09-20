import React, {useState, useEffect} from 'react'
import {isMobile} from "react-device-detect"
import Joyride, { STATUS } from "react-joyride"
import theme from "../components/styled/theme"

export const useOnboarding = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [isFinished, setIsFinished] = useState(true)
    const actionText = isMobile ? 'Long tap' : 'Right click'
    const [steps, setSteps] = useState([
        {
            target: 'body',
            placement: 'center',
            content: `Welcome to TABLIMBA!`,
            disableBeacon: true,
        },
        {
            target: '.container-tuning',
            content: `${actionText} to change the tuning`,
            disableBeacon: true,
        },
        {
            target: '.tab',
            content: `${actionText} to show the menu`,
            disableBeacon: true,
        },
        {
            target: '.kalimba',
            content: `${actionText} to highlight the key`,
            disableBeacon: true,
        },
    ])

    useEffect(() => {
        setIsFinished(localStorage.getItem('onboardingFinished') === 'true')
    })

    const start = () => setIsRunning(true)
    const stop = () => setIsRunning(false)

    const handleJoyrideCallback = data => {
        const { status } = data

        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            setIsRunning(false)
            localStorage.setItem('onboardingFinished', 'true')
        }
    }

    const styles = {
        options: {
            primaryColor: theme.accent,
        },
        tooltipContent: {
            fontSize: isMobile ? 18 : 20
        },
    }

    return [
        (
            !isFinished ?
                <Joyride
                    callback={handleJoyrideCallback}
                    steps={steps}
                    run={isRunning}
                    continuous
                    showSkipButton
                    styles={styles}
                    locale={{last: 'Start using Tablimba!'}}
                    floaterProps={{disableAnimation: true}}
                    disableScrolling
                /> :
                null
        ),
        start,
        stop
        ]
}