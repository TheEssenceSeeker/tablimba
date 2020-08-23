import * as Tone from 'tone'

const initSynth = () => new Tone.Synth().toDestination()

export default initSynth