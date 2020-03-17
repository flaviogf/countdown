import Countdown from '../src/js/countdown'

describe('Countdown', () => {
  describe('title', () => {
    it('should hava a title', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.title).toBe('test')
    })
  })

  describe('days', () => {
    it('should be 1 when the start is 2020-01-01 00:00:00 and the end is 2020-01-02 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 2, 0, 0, 0),
        'test'
      )

      expect(countdown.days).toBe(1)
    })

    it('should be 0 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.days).toBe(0)
    })
  })

  describe('hours', () => {
    it('should be 1 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 01:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 1, 0, 0),
        'test'
      )

      expect(countdown.hours).toBe(1)
    })

    it('should be 0 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.hours).toBe(0)
    })
  })

  describe('minutes', () => {
    it('should be 1 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:01:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 1, 0),
        'test'
      )

      expect(countdown.minutes).toBe(1)
    })

    it('should be 0 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.minutes).toBe(0)
    })
  })

  describe('seconds', () => {
    it('should be 1 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:00:10', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 1),
        'test'
      )

      expect(countdown.seconds).toBe(1)
    })

    it('should be 0 when the start is 2020-01-01 00:00:00 and the end is 2020-01-01 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.seconds).toBe(0)
    })
  })

  describe('toString', () => {
    it('should return 000:00:00:00 when the countdown was arrived at the end', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.toString()).toBe('000:00:00:00')
    })

    it('should return 001:00:00:00 when the start is 2020-01-01 00:00:00 and the end is 2020-01-02 00:00:00', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 2, 0, 0, 0),
        'test'
      )

      expect(countdown.toString()).toBe('001:00:00:00')
    })
  })

  describe('decrease', () => {
    it('should decrease 1000ms in countdown', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 2, 0, 0, 0),
        'test'
      )

      expect(countdown.toString()).toBe('001:00:00:00')

      countdown.decrease()

      expect(countdown.toString()).toBe('000:23:59:59')
    })

    it('should notify the observers that are subscribe in countdown', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 2, 0, 0, 0),
        'test'
      )

      const observer = jest.fn()

      countdown.subscribe(observer)

      countdown.decrease()

      expect(observer).toHaveBeenCalled()
    })
  })

  describe('finish', () => {
    it('should return true when the countdown have been arrived at the end', () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 1, 0, 0, 0),
        'test'
      )

      expect(countdown.isFinished).toBe(true)
    })

    it("should return false when the countdown haven't been arrived at the end", () => {
      const countdown = new Countdown(
        new Date(2020, 0, 1, 0, 0, 0),
        new Date(2020, 0, 2, 0, 0, 0),
        'test'
      )

      expect(countdown.isFinished).toBe(false)
    })
  })
})
