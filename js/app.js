const ITEMS = document.querySelectorAll('.numbers')
const countdownElement = document.querySelector('.counting__item-box')

let countdownDate = new Date(2023, 09, 08, 0, 0)

function getCountdownTime() {
	const now = new Date().getTime()

	const distance = countdownDate - now

	const ONE_DAY = 24 * 60 * 60 * 1000
	const ONE_HOUR = 60 * 60 * 1000
	const ONE_MINUTES = 60 * 1000

	let days = Math.floor(distance / ONE_DAY)
	let hours = Math.floor((distance % ONE_DAY) / ONE_HOUR)
	let minutes = Math.floor((distance % ONE_HOUR) / ONE_MINUTES)
	let seconds = Math.floor((distance % ONE_MINUTES) / 1000)

	const values = [days, hours, minutes, seconds]

	ITEMS.forEach(function (item, index) {
		item.textContent = values[index]
	})
	if (distance < 0) {
		clearInterval(countdown)
		countdownElement.innerHTML = "<h4 class='expired'>Time is up</h4>"
	}
}

let countdown = setInterval(getCountdownTime, 1000)
getCountdownTime()
