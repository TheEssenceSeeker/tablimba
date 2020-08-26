import * as Tone from 'tone'
import {parseNote} from "../misc/tabHandling"

class Synth {
    constructor() {
        this.synth = new Tone.PolySynth(Tone.Synth).toDestination()
    }

    playNote = (note, duration = '8n') => {
        this.synth.triggerAttackRelease(note, duration)
    }

    playTab = (tab) => {
        const now = Tone.now()
        let i = 0
        tab.forEach(item => {
            const {note, duration} = parseNote(item)
            i ++
            if (note !== '') {
                this.synth.triggerAttackRelease(note, duration, now + i / 2 )
            }
        })
    }
}

export default Synth