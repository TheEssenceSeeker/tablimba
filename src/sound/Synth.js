import * as Tone from 'tone'
import {parseNote} from "../misc/tabHandling"

class Synth {
    constructor() {
        this.synth = new Tone.PolySynth(Tone.Synth).toDestination()
    }

    setBpm = bpm => Tone.Transport.bpm.value = bpm

    getBpm = () => Tone.Transport.bpm.value

    playNote = (note, duration = '4n') => {
        this.synth.triggerAttackRelease(note, duration)
    }

    playTab = tab => {
        const now = Tone.Time()
        let currentTime = 0
        tab.forEach(item => {
            const {pitch, duration} = parseNote(item)
            if (pitch !== '') {
                this.synth.triggerAttackRelease(pitch, duration, now + currentTime)
            }
            currentTime += Tone.Time(duration).toSeconds()
        })
    }

    transposeNote = (note, interval) => Tone.Frequency(note).transpose(interval).toNote()
}

export default Synth