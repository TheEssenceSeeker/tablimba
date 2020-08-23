const playNote = (synth, note, duration = '4n') => {
    synth.triggerAttackRelease(note, duration)
}

export default playNote