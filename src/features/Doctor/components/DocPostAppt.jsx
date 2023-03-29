import React, { useState } from "react";
import Form from "../../../components/common/Form";
import FormInput from "../../../components/common/FormInput";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/ui/Button/Button";
import { doctorPostAppt } from "../../../services/doctorDataServices";
import "../css/doc_post_appt.css";

const DocPostAppt = ({ data: appt }) => {
  const [dataValues] = useState({
    findings: "",
    prescription: "",
    appt_id: "",
  });

  const submitEvent = async (data) => {
    data.appt_id = appt._id;
    await doctorPostAppt(data);
  };

  return (
    <React.Fragment>
      <div className="doc_post_appt">
        <a href="#appt-modal">
          <Button label="Done" />
        </a>
        <Form
          className="appt-modal"
          id="appt-modal"
          dataValues={dataValues}
          submitEvent={submitEvent}
        >
          <div className="header">
            <h3>Prescription Form</h3>
            <a href="#" className="close">
              <h3>X</h3>
            </a>
          </div>

          <div className="form_input_container">
            <FormInput label="Findings" name="findings" />
          </div>

          <div className="form_input_container">
            <TextArea label="Prescription" name="prescription" />
          </div>

          <div className="form_input_container">
            <Button label="Submit" />
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default DocPostAppt;
