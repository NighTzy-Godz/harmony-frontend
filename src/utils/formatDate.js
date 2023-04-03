import { toast } from "react-toastify";

const monthMap = {
  "01": {
    month: "January",
  },
  "02": {
    month: "February",
  },
  "03": {
    month: "March",
  },
  "04": {
    month: "April",
  },
  "05": {
    month: "May",
  },
  "06": {
    month: "June",
  },
  "07": {
    month: "July",
  },
  "08": {
    month: "August",
  },
  "09": {
    month: "September",
  },
  10: {
    month: "October",
  },
  11: {
    month: "November",
  },
  12: {
    month: "December",
  },
};

export default function formatDate(data) {
  try {
    if (data === "") {
      return false;
    }

    let date = data.split("-");
    console.log(date);
    const setMonth = date[1];
    const apptMonth = monthMap[setMonth].month;

    return `${apptMonth} ${date[2]} ${date[0]}`;
  } catch (err) {}
}
