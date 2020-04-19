let hour12 = true
let mode = "clock"
let startTime = new Date()

const changeTimeFormatButton = document.getElementById("changeTimeFormatButton")



const changeClock = (input) => {
	document.getElementById("clock").innerText = input
}

const makeTime = (hour12 = true) => {
	if (mode === "clock") {
		const time = new Date()
		return time.toLocaleTimeString("en-us", { hour12: hour12 })
	} else if (mode === "startTimer") {
		const now = new Date()
		let time = new Date(now - startTime)
		time = `${
			time.getUTCHours() < 10
				? "0" + time.getUTCHours().toString()
				: time.getUTCHours()
		}:${
			time.getUTCMinutes() < 10
				? "0" + time.getUTCMinutes().toString()
				: time.getUTCMinutes()
		}:${
			time.getUTCSeconds() < 10
				? "0" + time.getUTCSeconds().toString()
				: time.getUTCSeconds()
		}:${time.getUTCMilliseconds()}`
		return time
	}
}

changeClock(makeTime())

let interval = setInterval(() => {
	changeClock(makeTime())
}, 1000)

const changeButtons = (mode) => {
	switch (mode) {
		case "timer":
			document.getElementById(
				"button-container"
			).innerHTML = `<button onclick="setClock()">Back</button>
        <button onclick="startTimer()">Start</button>`
			break
		case "clock":
			document.getElementById("button-container").innerHTML = `
      <button onclick="changeTimeFormat()">12/24</button>
      <button onclick="setStopWatch()">Stopwatch</button>
      <button>Timer</button>`
			break
		case "startTimer":
			document.getElementById("button-container").innerHTML = `
      <button onclick="stopTimer()">Stop</button>
      <button onclick="restartTimer()">Restart</button>
      <button onClick="lap()">Lap</button>`
	}
}

const changeTimeFormat = () => {
  clearInterval(interval)
  hour12 = !hour12
  changeClock(makeTime(hour12))
  interval = setInterval(() => {
    changeClock(makeTime(hour12))
  }, 1000)
}

const lap = () => {
	console.log(document.getElementById("clock").innerText)
}

const stopTimer = () => {
	clearInterval(interval)
	changeClock(makeTime())
	mode = "timer"
	changeButtons(mode)
}

const restartTimer = () => {
	clearInterval(interval)
	startTime = new Date()
	interval = setInterval(() => {
		changeClock(makeTime())
	}, 1)
}

const startTimer = () => {
	mode = "startTimer"
	changeButtons(mode)
	startTime = new Date()
	interval = setInterval(() => {
		changeClock(makeTime())
	}, 1)
}
const setStopWatch = () => {
	clearInterval(interval)
	changeClock("00:00:00:000")
	mode = "timer"
	changeButtons(mode)
}

const setClock = () => {
	clearInterval(interval)
	interval = setInterval(() => {
		changeClock(makeTime(hour12))
	}, 1000)
	mode = "clock"
	changeButtons(mode)
	changeClock(makeTime(hour12))
}
