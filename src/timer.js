const timestamp = document.getElementById("timestamp");
document.body.appendChild(timestamp);

function padWithZero(value) {
  return value.toString().padStart(2, "0");
}

function updateTimestamp() {
  const now = new Date();
  const formattedDate = `${now.getDate()} ${
    now.getMonth() + 1
  } ${now.getFullYear()} ${padWithZero(now.getHours())}:${padWithZero(
    now.getMinutes()
  )}:${padWithZero(now.getSeconds())}:${padWithZero(
    now.getMilliseconds().toString().slice(0, 2)
  )}`;
  timestamp.textContent = formattedDate;
}

updateTimestamp();
setInterval(updateTimestamp, 70);
export default app;
