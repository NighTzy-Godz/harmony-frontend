import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button/Button";
import "../css/patient_done_appt.css";
import Form from "../../../components/common/Form";

const PatientDoneAppt = ({
  appt,
  color = "var(--red)",
  label = "",
  funcEvent,
}) => {
  const [dataValues] = useState({
    appt_id: "",
  });

  const submitEvent = async (data) => {
    data.appt_id = appt._id;
    await funcEvent(data);
  };

  return (
    <Form
      className="patient_done_appt"
      dataValues={dataValues}
      submitEvent={submitEvent}
    >
      {appt.status !== "Pending" ? (
        <Button label={label} color={color} />
      ) : (
        <Button label={label} color={color} />
      )}
    </Form>
  );
};

export default PatientDoneAppt;
