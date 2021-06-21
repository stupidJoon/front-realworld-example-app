import dayjs from 'dayjs';

function parseDate(date: string) {
  return dayjs(date).format('MMM D, YYYY');
}

export default parseDate;
