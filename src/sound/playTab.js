import * as Tone from 'tone'

const playTab = tab => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    let i = 0
    tab.forEach(note => {
        i++
        if (note !== '') {
            synth.triggerAttackRelease(note, "4n", now + i / 2)
        }
    })

}

export default playTab