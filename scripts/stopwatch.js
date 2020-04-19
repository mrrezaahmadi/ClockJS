let startTime = new Date()

// const changeTimeFormatButton = document.getElementById("changeTimeFormatButton")

const render = (input) => {
	document.getElementById("stopwatch").innerText = input
}

const setStopwatch = () => {
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

let interval = setInterval

const startStopwatch = () => {
	interval = setInterval(() => {
		render(setStopwatch())
	}, 1)
}

const lap = () => {
	const p = document.createElement('p')
	p.textContent = setStopwatch()
	document.querySelector('.lap').appendChild(p)
}

const pauseStopwatch = () => {
	clearInterval(interval)
}

const restartTimer = () => {
	clearInterval(interval)
	startTime = new Date()
	interval = setInterval(() => {
		render(setStopwatch())
	}, 1)
}

