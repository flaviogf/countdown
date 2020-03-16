import Countdown from '../src/countdown'

describe('Countdown', () => {
  const SOME_EVENT = 'Christmas'

  const START_OF_YEAR = new Date(2020, 0, 1)

  const END_OF_YEAR = new Date(2020, 11, 31)

  it('should have the start method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.start).toBeInstanceOf(Function)
  })

  it('should have the daysLeft method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.daysLeft).toBeInstanceOf(Function)
  })

  it('should have the hoursLeft method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.hoursLeft).toBeInstanceOf(Function)
  })

  it('should have the minutesLeft method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.minutesLeft).toBeInstanceOf(Function)
  })

  it('should have the secondsLeft method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.secondsLeft).toBeInstanceOf(Function)
  })

  it('should have the subscribe method', () => {
    const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

    expect(countdown.subscribe).toBeInstanceOf(Function)
  })

  describe('constructor', () => {
    it("should throw an error when the name isn't informed", () => {
      const name = null

      const startDate = new Date(2020, 0, 1)

      const endDate = new Date(2020, 11, 25)

      expect(() => {
        new Countdown(name, startDate, endDate)
      }).toThrow(new Error('name is required.'))
    })

    it("should throw an error when the start isn't informed", () => {
      const name = 'Christmas'

      const startDate = null

      const endDate = new Date(2020, 11, 25)

      expect(() => {
        new Countdown(name, startDate, endDate)
      }).toThrow(new Error('start date is required.'))
    })

    it("should throw an error when the end isn't informed", () => {
      const name = 'Christmas'

      const startDate = new Date(2020, 0, 1)

      const endDate = null

      expect(() => {
        new Countdown(name, startDate, endDate)
      }).toThrow(new Error('end date is required.'))
    })
  })

  describe('daysLeft', () => {
    it('should return 10 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 11:11:11', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 11, 11, 11, 11)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const daysLeft = countdown.daysLeft()

      expect(daysLeft).toBe(10)
    })

    it('should return 20 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-21 21:21:21', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 21, 21, 21, 21)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const daysLeft = countdown.daysLeft()

      expect(daysLeft).toBe(20)
    })
  })

  describe('hoursLeft', () => {
    it('should return 10 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 11:11:11', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 1, 11, 11, 11)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const hoursLeft = countdown.hoursLeft()

      expect(hoursLeft).toBe(10)
    })

    it('should return 20 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-21 21:21:21', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 21, 21, 21, 21)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const hoursLeft = countdown.hoursLeft()

      expect(hoursLeft).toBe(20)
    })
  })

  describe('minutesLeft', () => {
    it('should return 10 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 11:11:11', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 11, 11, 11, 11)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const minutesLeft = countdown.minutesLeft()

      expect(minutesLeft).toBe(10)
    })

    it('should return 20 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 21:21:21', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 21, 21, 21, 21)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const minutesLeft = countdown.minutesLeft()

      expect(minutesLeft).toBe(20)
    })
  })

  describe('secondsLeft', () => {
    it('should return 10 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 11:11:11', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 11, 11, 11, 11)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const secondsLeft = countdown.secondsLeft()

      expect(secondsLeft).toBe(10)
    })

    it('should return 20 when the start date is 2020-01-01 01:01:01 and the end date is 2020-01-11 21:21:21', () => {
      const startDate = new Date(2020, 1, 1, 1, 1, 1)

      const endDate = new Date(2020, 1, 21, 21, 21, 21)

      const countdown = new Countdown(SOME_EVENT, startDate, endDate)

      const secondsLeft = countdown.secondsLeft()

      expect(secondsLeft).toBe(20)
    })
  })

  describe('start', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.clearAllTimers()
    })

    it('should notify subscribe after then a second', () => {
      const countdown = new Countdown(SOME_EVENT, START_OF_YEAR, END_OF_YEAR)

      const subscriber = jest.fn()

      countdown.subscribe(subscriber)

      countdown.start()

      jest.runOnlyPendingTimers()

      expect(subscriber).toHaveBeenCalled()
    })

    it('should call stop when days left is lower or equal 0', () => {
      const begin = new Date(2020, 0, 1)

      const end = new Date(2020, 0, 1)

      const countdown = new Countdown(SOME_EVENT, begin, end)

      const subscriber = jest.fn()

      countdown.subscribe(subscriber)

      countdown.start()

      jest.runOnlyPendingTimers()

      expect(clearInterval).toHaveBeenCalled()
    })
  })
})
