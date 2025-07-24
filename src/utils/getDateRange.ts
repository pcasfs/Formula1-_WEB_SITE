export function getDateRange(start: Date, end: Date): string {
  const format = (date: Date) => `${date.getMonth() + 1}월 ${date.getDate()}일`;

  return start.getMonth() === end.getMonth()
    ? `${start.getMonth() + 1}월 ${start.getDate()}일 ~ ${end.getDate()}일`
    : `${format(start)} ~ ${format(end)}`;
}
