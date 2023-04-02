// import moment from "moment/moment";

export default function formatTime(time) {
  if (time === "") return "";
  const newTime = time.split(":");
  console.log(newTime);
  if (newTime[0] === "00") return `12:${newTime[1]} AM`;
  if (newTime[0] == 12) return `12:${newTime[1]} PM`;
  if (newTime[0] > 12) return `${newTime[0] - 12}:${newTime[1]} PM`;
  return `${newTime[0][1]}:${newTime[1]} AM`;
}
