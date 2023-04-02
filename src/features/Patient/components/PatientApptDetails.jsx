import React, { useContext } from "react";
import DropDown from "../../../components/ui/DropDown";
import mode_of_consult from "../utils/mode_of_consult";
import { FormContext } from "../../../components/common/Form";

const PatientApptDetails = () => {
  const formContext = useContext(FormContext);
  const { handleChange } = formContext;

  return (
    <React.Fragment>
      <div className="">
        <DropDown
          label="Mode of Consultation"
          name="mode_of_consult"
          data={mode_of_consult}
          firstOption="Select Mode Of Consultation"
        />
      </div>

      <input type="date" name="date" onChange={handleChange} />
      <input type="time" name="time" id="" onChange={handleChange} />
      <button>Submit</button>
    </React.Fragment>
  );
};

export default PatientApptDetails;
