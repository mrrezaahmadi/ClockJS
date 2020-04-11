const chronometerEl = document.querySelector('.chronometer')
const startEl = document.querySelector('#start')
const stopEl = document.querySelector('#stop')

let second = 0
let minute = 0
let hour = 0

const renderChronometer = () => {
    chronometerEl.textContent = `
    ${hour < 10 ? `0${hour}` : hour}:
    ${minute < 10 ? `0${minute}` : minute}:
    ${second < 10 ? `0${second}` : second}`
}

let time = setInterval(0)

const start = () => {
    second++
    if (second > 59) {
        minute++
        second = 0
    }
    if (minute > 59) {
        hour++
        minute = 0
    }
    renderChronometer()
}

const stop = () => {
    clearInterval(time)
}


renderChronometer()

startEl.addEventListener('click', () => {
    time = setInterval(start, 1000)
})

stopEl.addEventListener('click', () => {
    stop()
})
