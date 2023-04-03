import { useContext, useState } from "react";
import "../css/patient_create_appt.css";
import Form, { FormContext } from "../../../components/common/Form";

import AllDoctors from "../../../pages/AllDoctors";
import React from "react";
import PatientApptDetails from "./PatientApptDetails";
import formatTime from "../../../utils/formatTime";
import formatDate from "../../../utils/formatDate";
import { toast } from "react-toastify";
import { createAppointment } from "../../../services/patientDataServices";
import { useNavigate } from "react-router-dom";

const PatientCreateAppt = () => {
  const navigate = useNavigate();

  const dataValues = {
    doc_id: "",
    date: "",
    mode_of_consult: "",
    time: "",
  };

  const [step, setStep] = useState(1);

  const handleStepChange = (step) => {
    setStep(step);
  };

  const renderForm = () => {
    if (step === 1)
      return <AllDoctors step={step} onStepChange={handleStepChange} />;

    return <PatientApptDetails step={step} onStepChange={handleStepChange} />;
  };

  const submitEvent = async (data) => {
    let setTime = formatTime(data.time);
    let setDate = formatDate(data.date);

    if (data.mode_of_consult === "")
      return toast.error("Mode of Consultation cannot be empty.");

    if (!setTime) {
      return toast.error("Time cannot be empty.", { autoClose: 2000 });
    }

    if (!setDate) {
      return toast.error("Date cannot be empty.", { autoClose: 2000 });
    }

    data.time = setTime;
    data.date = setDate;

    console.log(data);
    const result = await createAppointment(data);
    try {
      if (result.response.status === 400) return alert("Error");
    } catch (error) {}

    if (result.status === 200) return navigate("/patient/settings");
    return;
  };

  const renderMainContent = () => {
    return (
      <div className="patient_create_appt">
        <div className="container">
          <Form className="" submitEvent={submitEvent} dataValues={dataValues}>
            {renderForm()}
          </Form>
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderMainContent()}</React.Fragment>;
};

export default PatientCreateAppt;
