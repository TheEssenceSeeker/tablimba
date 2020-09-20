import React from 'react'
import Radio from "../Lib/Radio"
import {noteSymbols, restSymbols} from "../../misc/tabHandling"
import Checkbox from "../Lib/Checkbox"
import styled from 'styled-components'

const DurationEditorContainer = styled.div`
  display: inline-flex;
  align-items:center;
  margin-top: 0.3rem;
`

const DurationEditor = ({name, editorActiveDuration, onChange, isDotChecked, isRestChecked, handleDotCheck, handleRestCheck, className}) => {
    const durations = ['1n', '2n', '4n', '8n', '16n', '32n', '64n']
    return (
        <DurationEditorContainer className={className}>
            {
                durations.map((duration, i) => (
                    <Radio title={'Choose note duration'} key={i} name={name} value={duration} checked={editorActiveDuration === duration} onChange={onChange} text={(isRestChecked ? restSymbols[duration] : noteSymbols[duration]) + (isDotChecked ? '.' : '')} />
                ))
            }
            <Checkbox title={'Increase note duration by half'} checked={isDotChecked} onChange={handleDotCheck} text={'.'} />
            <Checkbox title={'Add rest instead'} checked={isRestChecked} onChange={handleRestCheck} text={restSymbols['4n']} />
        </DurationEditorContainer>
    )
}

export default DurationEditor