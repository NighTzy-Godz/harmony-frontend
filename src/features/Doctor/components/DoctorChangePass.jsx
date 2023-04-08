import React, { useState } from "react";
import Form from "../../../components/common/Form";
import Button from "../../../components/ui/Button/Button";
import FormInput from "../../../components/common/FormInput";
import "../../../assets/css/user_change_pass.css";

import { useNavigate } from "react-router-dom";
import { doctorUpdatePassword } from "../../../services/doctorDataServices";

const DoctorChangePass = () => {
  const navigate = useNavigate();

  const [dataValues] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });

  const submitEvent = async (data) => {
    const result = await doctorUpdatePassword(data);
    try {
      if (result.status === 200) return navigate("/doctor/dashboard");
    } catch (error) {
      return;
    }
  };

  return (
    <React.Fragment>
      <Form
        dataValues={dataValues}
        className="user_change_pass"
        submitEvent={submitEvent}
      >
        <h1>Update your Password</h1>

        <div className="form_input_container">
          <FormInput
            label="Current Password"
            name="currentPass"
            type="password"
          />
        </div>
        <div className="form_input_container">
          <FormInput label="New Password" name="newPass" type="password" />
        </div>
        <div className="form_input_container">
          <FormInput
            label="Confirm Password"
            name="confirmPass"
            type="password"
          />
        </div>
        <Button label="Update Password" />
      </Form>
    </React.Fragment>
  );
};

export default DoctorChangePass;
