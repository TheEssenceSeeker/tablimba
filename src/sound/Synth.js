import * as Tone from 'tone'

class Synth {
    constructor() {
        this.synth = new Tone.Synth().toDestination()
    }

    playNote = (note, duration = '4n') => {
        this.synth.triggerAttackRelease(note, duration)
    }

    playTab = (tab) => {
        const now = Tone.now()
        let i = 0
        tab.forEach(note => {
            i++
            if (note !== '') {
                this.synth.triggerAttackRelease(note, "4n", now + i / 2)
            }
        })
    }
}

export default Synth