const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    return {
        username: (Math.random() + 1).toString(36).substring(7),
        score: Math.floor(Math.random() * 50000)
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson()
            }
        })
    }

    return makeDataLevel()
}