export const convertData = (date: string) => {
  const dateFormat = new Date(date);
  let hours = dateFormat.getHours().toString();
  let minute = dateFormat.getMinutes().toString();

  if (hours.length === 1) hours = "0" + hours;
  if (minute.length === 1) minute = "0" + minute;

  return `${hours}:${minute}`;
};
