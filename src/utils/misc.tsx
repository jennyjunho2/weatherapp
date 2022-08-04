export function getCurrentDate(offset: number = 0): string {
  const ArrayDayStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const ArrayMonthStr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let today = new Date();
  today.setDate(today.getDate() + offset);
  let todayDay = ArrayDayStr[today.getDay()];
  let todayMonth = ArrayMonthStr[today.getMonth()];
  let todayDate = today.getDate();
  return `${todayDay}, ${todayMonth} ${todayDate < 10 ? "0" + todayDate.toString() : todayDate
    }`;
}