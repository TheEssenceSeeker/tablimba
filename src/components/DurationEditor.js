import React from 'react'
import Radio from "./Radio"
import {noteSymbols, restSymbols} from "../misc/tabHandling"
import Checkbox from "./Checkbox"
import Input from "./Input";
import InputTempo from "./InputTempo";
import {DefaultInputContainer} from "./styled/shared";

const DurationEditor = ({name, editorActiveDuration, onChange, isDotChecked, isRestChecked, handleDotCheck, handleRestCheck}) => {
    const durations = ['1n', '2n', '4n', '8n', '16n', '32n', '64n']
    return (
        <div className={'duration-editor'}>
            {
                durations.map((duration, i) => (
                    <Radio key={i} name={name} value={duration} checked={editorActiveDuration === duration} onChange={onChange} text={(isRestChecked ? restSymbols[duration] : noteSymbols[duration]) + (isDotChecked ? '.' : '')} />
                ))
            }
            <Checkbox checked={isDotChecked} onChange={handleDotCheck} text={'.'} />
            <Checkbox checked={isRestChecked} onChange={handleRestCheck} text={restSymbols['4n']} />
        </div>
    )
}

export default DurationEditor