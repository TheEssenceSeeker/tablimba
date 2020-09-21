import React, {useState} from 'react'

const TuningContext = React.createContext()

const TuningContextProvider = ({
        initialTuning,
        children
    }) => {

    const [tuning, setTuning] = useState(initialTuning)

    const resetTuning = () => setTuning(initialTuning)

    return (
        <TuningContext.Provider value={{tuning, setTuning, resetTuning}}>
            {children}
        </TuningContext.Provider>
    )
}

export {TuningContextProvider, TuningContext}

