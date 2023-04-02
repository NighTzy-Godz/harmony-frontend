import moment from "moment/moment";

export default function formatDate(data, format) {
  return moment(data).format(format);
}
