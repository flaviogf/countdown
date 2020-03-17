class Countdown {
  constructor(start, end, title) {
    this._start = +start
    this._end = +end
    this._title = title
    this._observers = []
  }

  get title() {
    return this._title
  }

  get days() {
    if (this.isFinished) return 0

    const days = Math.floor((this._end - this._start) / (1000 * 60 * 60 * 24))

    return days
  }

  get hours() {
    if (this.isFinished) return 0

    const hours = Math.floor(
      ((this._end - this._start) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )

    return hours
  }

  get minutes() {
    if (this.isFinished) return 0

    const minutes = Math.floor(
      ((this._end - this._start) % (1000 * 60 * 60)) / (1000 * 60)
    )

    return minutes
  }

  get seconds() {
    if (this.isFinished) return 0

    const seconds = Math.floor(((this._end - this._start) % (1000 * 60)) / 1000)

    return seconds
  }

  get isFinished() {
    return this._end - this._start <= 0
  }

  decrease() {
    this._end -= 1000

    this._notify()
  }

  subscribe(observer) {
    this._observers.push(observer)
  }

  _notify() {
    for (const observer of this._observers) {
      observer()
    }
  }

  toString() {
    if (this.isFinished) return '000:00:00:00'

    const days = this.days.toString().padStart(3, '0')

    const hours = this.hours.toString().padStart(2, '0')

    const minutes = this.minutes.toString().padStart(2, '0')

    const seconds = this.seconds.toString().padStart(2, '0')

    return `${days}:${hours}:${minutes}:${seconds}`
  }
}

export default Countdown
