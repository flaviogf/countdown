import Countdown from './js/countdown'

const titleElement = document.querySelector('#titleElement')

const countdownElement = document.querySelector('#countdownElement')

const titleInput = document.querySelector('#titleInput')

const endInput = document.querySelector('#endInput')

const button = document.querySelector('#button')

let clock = null

button.addEventListener('click', () => {
  const start = new Date()

  const end = new Date(endInput.value.replace(/-/g, ','))

  const title = titleInput.value || 'Countdown'

  const countdown = new Countdown(start, end, title)

  countdown.subscribe(() => {
    countdownElement.textContent = countdown.toString()
    titleElement.textContent = countdown.title
  })

  if (clock) clearInterval(clock)

  clock = setInterval(() => countdown.decrease(), 1000)
})
