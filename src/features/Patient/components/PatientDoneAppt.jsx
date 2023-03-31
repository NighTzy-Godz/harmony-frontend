import { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import "../css/patient_done_appt.css";
import Form from "../../../components/common/Form";
import { deleteAppt } from "../../../services/patientDataServices";
const PatientDoneAppt = ({ appt }) => {
  const [dataValues] = useState({
    appt_id: "",
  });

  const submitEvent = async (data) => {
    data.appt_id = appt._id;
    await deleteAppt(data);
  };

  return (
    <Form
      className="patient_done_appt"
      dataValues={dataValues}
      submitEvent={submitEvent}
    >
      {appt.status !== "Pending" ? <Button label="Remove" /> : null}
    </Form>
  );
};

export default PatientDoneAppt;
