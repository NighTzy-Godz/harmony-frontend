import React, { useContext } from "react";
import DropDown from "../../../components/ui/DropDown";
import mode_of_consult from "../utils/mode_of_consult";
import { FormContext } from "../../../components/common/Form";
import FormInput from "../../../components/common/FormInput";

const PatientApptDetails = ({ step, onStepChange }) => {
  return (
    <div className="patient_appt_height_container">
      <div className="patient_appt_details">
        <div className="patient_appt_details_container">
          <h3>More Details</h3>
          <p onClick={() => onStepChange(step - 1)}>Go Back</p>
        </div>

        <div className="form_input_container">
          <DropDown
            label="Mode of Consultation"
            name="mode_of_consult"
            data={mode_of_consult}
            firstOption="Select Mode Of Consultation"
          />
        </div>

        <div className="form_input_container">
          <FormInput label="Date" name="date" type="date" />
        </div>
        <div className="form_input_container">
          <FormInput label="Time" name="time" type="time" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default PatientApptDetails;
