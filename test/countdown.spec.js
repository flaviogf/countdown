import {
  getDaysLeft,
  getHoursLeft,
  getMinutesLeft,
  getSecondsLeft,
} from '../src/countdown'

describe('getDaysLeft', () => {
  it('days should be 9 when call start method passing 2000-01-01 00:00:00 and 2000-01-10 00:00:00', () => {
    const start = new Date(2020, 0, 1)

    const end = new Date(2020, 0, 10)

    const days = getDaysLeft(start, end)

    expect(days).toBe(9)
  })
})

describe('getHoursLeft', () => {
  it('hours should be 9 when call start method passing 2000-01-01 01:00:00 and 2000-01-10 10:00:00', () => {
    const start = new Date(2020, 0, 1, 1)

    const end = new Date(2020, 0, 10, 10)

    const days = getDaysLeft(start, end)

    const hours = getHoursLeft(start, end, days)

    expect(hours).toBe(9)
  })
})

describe('getMinutesLeft', () => {
  it('minutes should be 9 when call start method passing 2000-01-01 00:01:00 and 2000-01-10 00:10:00', () => {
    const start = new Date(2020, 0, 1, 0, 1)

    const end = new Date(2020, 0, 10, 0, 10)

    const days = getDaysLeft(start, end)

    const hours = getHoursLeft(start, end, days)

    const minutes = getMinutesLeft(start, end, days, hours)

    expect(minutes).toBe(9)
  })
})

describe('getSecondsLeft', () => {
  it('seconds should be 9 when call start method passing 2000-01-01 00:00:01 and 2000-01-10 00:00:10', () => {
    const start = new Date(2020, 0, 1, 0, 0, 1)

    const end = new Date(2020, 0, 10, 0, 0, 10)

    const days = getDaysLeft(start, end)

    const hours = getHoursLeft(start, end, days)

    const minutes = getMinutesLeft(start, end, days, hours)

    const seconds = getSecondsLeft(start, end, days, hours, minutes)

    expect(seconds).toBe(9)
  })
})
