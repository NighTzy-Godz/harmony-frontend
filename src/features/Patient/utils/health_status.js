import body_temp from "../../../assets/img/temp.png";
import glucose_lvl from "../../../assets/img/glucose.png";
import heart from "../../../assets/img/heart.png";
import blood_pressure from "../../../assets/img/blood_press.png";

const health_data = [
  {
    id: 0,
    name: "Body Temperature",
    info: "36.6 Celsius",
    img: body_temp,
  },
  {
    id: 1,
    name: "Glucose Level",
    info: "70 mg/dL",
    img: glucose_lvl,
  },
  {
    id: 2,
    name: "Heart Rate",
    info: "88 BPM",
    img: heart,
  },
  {
    id: 3,
    name: "Blood Pressure",
    info: "120 / 80 mmHg",
    img: blood_pressure,
  },
];

export default health_data;
