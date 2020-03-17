import { addDays, subMilliseconds } from 'date-fns'
import countdown from './countdown'

function main(start, end) {
  const result = countdown(start, subMilliseconds(end, 1000))
  console.log(result)
}

main(new Date(), addDays(new Date(), 2))
