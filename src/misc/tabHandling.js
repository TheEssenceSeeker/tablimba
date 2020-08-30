export const parseTab = tabArr => {
    let result = []
    tabArr.forEach(row => {
        const [note, duration = '8n'] = row.split('|')
        const durationInEights = 8 / duration.slice(0, -1)
        for(let i = 0; i < durationInEights; i++) {
            let type = ''
            if (i === 0 && i === durationInEights - 1) { // If it is an eighth (1 dot)
                type = ''
            } else if (i === durationInEights - 1) {
                type = 'end'
            } else if (i === 0) {
                type = 'start'
            } else {
                type = 'mid'
            }
            result.push({note, type})
        }
    })
    return result
}

export const parseNote = strNote => {
    const [pitch, duration = '4n'] = strNote.split('|')
    return {pitch, duration}
}

export const noteSymbols = {
    '1n': '𝅝',
    '2n': '𝅗𝅥',
    '4n': '𝅘𝅥',
    '8n': '𝅘𝅥𝅮',
    '16n': '𝅘𝅥𝅯',
    '32n': '𝅘𝅥𝅰',
    '64n': '𝅘𝅥𝅱',
    '1n.': '𝅝.',
    '2n.': '𝅗𝅥.',
    '4n.': '𝅘𝅥.',
    '8n.': '𝅘𝅥𝅮.',
    '16n.': '𝅘𝅥𝅯.',
    '32n.': '𝅘𝅥𝅰.',
    '64n.': '𝅘𝅥𝅱.'
}

export const restSymbols = {
    '1n': '𝄻',
    '2n': '𝄼',
    '4n': '𝄽',
    '8n': '𝄾',
    '16n': '𝄿',
    '32n': '𝅀',
    '64n': '𝅁',
    '1n.': '𝄻.',
    '2n.': '𝄼.',
    '4n.': '𝄽.',
    '8n.': '𝄾.',
    '16n.': '𝄿.',
    '32n.': '𝅀.',
    '64n.': '𝅁.'
}
