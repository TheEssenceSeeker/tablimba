import React from 'react'
import Radio from "./Radio"
import {noteSymbols, restSymbols} from "../misc/tabHandling"
import Checkbox from "./Checkbox"

const DurationEditor = ({name, editorActiveDuration, onChange, isDotChecked, isRestChecked, handleDotCheck, handleRestCheck}) => {
    const durations = ['1n', '2n', '4n', '8n', '16n', '32n', '64n']
    return (
        <div className={'duration-editor'}>
            {
                durations.map((duration, i) => (
                    <Radio title={'Choose note duration'} key={i} name={name} value={duration} checked={editorActiveDuration === duration} onChange={onChange} text={(isRestChecked ? restSymbols[duration] : noteSymbols[duration]) + (isDotChecked ? '.' : '')} />
                ))
            }
            <Checkbox title={'Increase note duration by half'} checked={isDotChecked} onChange={handleDotCheck} text={'.'} />
            <Checkbox title={'Add rest instead'} checked={isRestChecked} onChange={handleRestCheck} text={restSymbols['4n']} />
        </div>
    )
}

export default DurationEditor