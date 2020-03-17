import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'

export default function countdown(start, end) {
  const days = getDaysLeft(start, end)

  const hours = getHoursLeft(start, end, days)

  const minutes = getMinutesLeft(start, end, days, hours)

  const seconds = getSecondsLeft(start, end, days, hours, minutes)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

export function getDaysLeft(start, end) {
  return differenceInDays(end, start)
}

export function getHoursLeft(start, end, days) {
  const daysInHours = days * 24
  return differenceInHours(end, start) - daysInHours
}

export function getMinutesLeft(start, end, days, hours) {
  const daysInMinutes = days * 24 * 60
  const hoursInMinutes = hours * 60
  const alreadyComputed = daysInMinutes - hoursInMinutes
  return differenceInMinutes(end, start) - alreadyComputed
}

export function getSecondsLeft(start, end, days, hours, minutes) {
  const daysInSeconds = days * 24 * 60 * 60
  const hoursInSeconds = hours * 60 * 60
  const minutesInSeconds = minutes * 60
  const alreadyComputed = daysInSeconds - hoursInSeconds - minutesInSeconds
  return differenceInSeconds(end, start) - alreadyComputed
}
