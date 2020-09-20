import React, {useState} from 'react'
import {isMobile} from "react-device-detect"
import Joyride from "react-joyride"

export const useOnboarding = () => {

    const [isRunning, setIsRunning] = useState(false)

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

    const start = () => setIsRunning(true)
    const stop = () => setIsRunning(false)

    return [
        <Joyride steps={steps} run={isRunning} continuous={true}/>,
        start,
        stop
        ]
}