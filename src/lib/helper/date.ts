
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function fromNow(t: string) {
  dayjs.extend(relativeTime)

  return dayjs(t).fromNow()
}

export function formatDate(t: string) {
  return dayjs(t).format('YYYY.MM.DD')
}

export function formatDateTime(t: string) {
  return dayjs(t).format('YYYY-MM-DD HH:mm:ss')
}
