class Countdown {
  constructor(name, startDate, endDate) {
    if (!name) {
      throw new Error('name is required.')
    }

    if (!startDate) {
      throw new Error('start date is required.')
    }

    if (!endDate) {
      throw new Error('end date is required.')
    }

    this.name = name
    this.startDate = startDate
    this.endDate = endDate
    this.timeLeft = this.endDate - this.startDate
    this.subscribers = []
  }

  start() {
    this.interval = setInterval(() => {
      this.timeLeft -= 1000

      if (this.isFinished()) {
        this.notify()
        this.stop()
        return
      }

      this.notify()
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
  }

  daysLeft() {
    const seconds = millisecondToSecond(this.timeLeft)

    const minutes = secondToMinute(seconds)

    const hours = minuteToHour(minutes)

    const days = Math.floor(hourToDate(hours))

    return days
  }

  hoursLeft() {
    const daysLeft = dayToMillisecond(this.daysLeft())

    const milliseconds = this.timeLeft - daysLeft

    const seconds = millisecondToSecond(milliseconds)

    const minutes = secondToMinute(seconds)

    const hours = Math.floor(minuteToHour(minutes))

    return hours
  }

  minutesLeft() {
    const daysLeft = dayToMillisecond(this.daysLeft())

    const hoursLeft = hourToMillisecond(this.hoursLeft())

    const milliseconds = this.timeLeft - daysLeft - hoursLeft

    const seconds = millisecondToSecond(milliseconds)

    const minutes = Math.floor(secondToMinute(seconds))

    return minutes
  }

  secondsLeft() {
    const daysLeft = dayToMillisecond(this.daysLeft())

    const hoursLeft = hourToMillisecond(this.hoursLeft())

    const minutesLeft = minuteToMillisecond(this.minutesLeft())

    const milliseconds = this.timeLeft - daysLeft - hoursLeft - minutesLeft

    const seconds = Math.floor(millisecondToSecond(milliseconds))

    return seconds
  }

  isFinished() {
    return this.daysLeft() < 0
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  notify() {
    for (const subscriber of this.subscribers) {
      subscriber()
    }
  }
}

function dayToMillisecond(day) {
  return day * 86400000
}

function hourToMillisecond(hour) {
  return hour * 3600000
}

function minuteToMillisecond(minute) {
  return minute * 60000
}

function millisecondToSecond(millisecond) {
  return millisecond / 1000
}

function secondToMinute(second) {
  return second / 60
}

function minuteToHour(minute) {
  return minute / 60
}

function hourToDate(hour) {
  return hour / 24
}

export default Countdown
