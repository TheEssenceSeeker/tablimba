import * as Tone from 'tone'

const playNote = (note, duration = '8n') => {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease(note, duration)
}

export default playNote