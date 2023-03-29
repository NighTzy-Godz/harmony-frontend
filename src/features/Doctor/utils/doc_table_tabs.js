import DocIncomingAppts from "../components/DocIncomingAppts";
import DocRequestAppts from "../components/DocRequestAppts";

const table_tabs = [
  {
    id: 0,
    name: "Request Appointments",
    content: <DocRequestAppts />,
  },
  {
    id: 1,
    name: "Incoming Appointments",
    content: <DocIncomingAppts />,
  },
];

export default table_tabs;
