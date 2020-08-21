import * as Tone from 'tone'

const playNote = (note, duration = '4n') => {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease(note, duration)
}

export default playNote