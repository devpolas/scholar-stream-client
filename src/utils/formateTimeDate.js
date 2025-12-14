export function formatTimeDate(time) {
  const date = new Date(time);
  const formattedTime = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

  return formattedTime;
}
