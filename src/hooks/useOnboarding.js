import React, {useState, useEffect} from 'react'
import {isMobile} from "react-device-detect"
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride"

export const useOnboarding = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [isFinished, setIsFinished] = useState(true)
    const actionText = isMobile ? 'Long tap' : 'Right click'
    const [steps, setSteps] = useState([
        {
            target: '.container-tuning',
            content: `${actionText} to change tuning`,
            disableBeacon: true,
        },
        {
            target: '.tab',
            content: `${actionText} to show menu`,
            disableBeacon: true,
        },
        {
            target: '.kalimba',
            content: `${actionText} to highlight keys`,
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

    return [
        (
            !isFinished ?
                <Joyride
                    callback={handleJoyrideCallback}
                    steps={steps}
                    run={isRunning}
                    continuous
                    showSkipButton /> :
                null
        ),
        start,
        stop
        ]
}