import { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import Form from "../../../components/common/Form";
import "../css/doc_decide_appt.css";
import { doctorDecideAppt } from "../../../services/doctorDataServices";

const DoctorDecideAppt = ({ appt }) => {
  const [status, setStatus] = useState("");

  const [dataValues] = useState({
    status: "",
    appt_id: "",
  });

  const handleBtnEvent = (stat) => {
    setStatus(stat);
  };

  const submitEvent = (data) => {
    data.status = status;
    data.appt_id = appt._id;

    doctorDecideAppt(data);
  };

  return (
    <Form
      dataValues={dataValues}
      className="doctor_decide_appt"
      submitEvent={submitEvent}
    >
      <Button label="Cancel" btnEvent={() => handleBtnEvent("Cancelled")} />
      <Button label="Confirm" btnEvent={() => handleBtnEvent("Confirmed")} />
    </Form>
  );
};

export default DoctorDecideAppt;
