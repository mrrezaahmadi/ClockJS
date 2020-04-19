let hour12 = true

const changeClock = (input) => {
	document.querySelector(".time").innerText = input
}

const makeTime = (hour12 = true) => {
	const time = new Date()
	return time.toLocaleTimeString("en-us", { hour12: hour12 })
}

changeClock(makeTime())

let interval = setInterval(() => {
	changeClock(makeTime())
}, 1000)

const changeTimeFormat = () => {
	clearInterval(interval)
	hour12 = !hour12
	changeClock(makeTime(hour12))
	interval = setInterval(() => {
		changeClock(makeTime(hour12))
	}, 1000)
}

const setClock = () => {
	clearInterval(interval)
	interval = setInterval(() => {
		changeClock(makeTime(hour12))
	}, 1000)
	changeClock(makeTime(hour12))
}
