let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")

const start = (hour, minute, second) => {
	let interval = setInterval(() => {
		if (second === 0 && minute === 0 && hour === 0) {
			clearInterval(interval)
		}
		if (second === 0 && minute > 0) {
			minute--
			if (minute === 0 && hour > 0) {
				hour--
				minute = 59
			}
			second = 59
		}
		render(hour, minute, second)
		second--
	}, 1000)
}

document.querySelector("#start-timer").addEventListener("click", () => {
	hour = +hour.value
	minute = +minute.value
	second = +second.value

	if (minute < 60 && second < 60) {
		start(hour, minute, second)
	} else {
		alert('Please enter valid numbers')
	}
})

const render = (hour, minute, second) => {
	document.querySelector(".time").innerText = `${
		hour < 10 ? `0${hour}` : hour
	}:${minute < 10 ? `0${minute}` : minute}:${
		second < 10 ? `0${second}` : second
	}`
}

// document.getElementById('home').addEventListener('click', () => {
// 	window.location.pathname = "./home.html"
// })
