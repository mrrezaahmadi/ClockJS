const chronometerEl = document.querySelector('.chronometer')

let second = 0
let minute = 0
let hour = 0

const renderChronometer = () => {
    chronometerEl.textContent = `
    ${hour < 10 ? `0${hour}` : hour}:
    ${minute < 10 ? `0${minute}` : minute}:
    ${second < 10 ? `0${second}` : second}`
}

renderChronometer()