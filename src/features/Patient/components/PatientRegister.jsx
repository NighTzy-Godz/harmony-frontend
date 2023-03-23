import React, { useState } from "react";
import Form from "../../../components/common/Form";
import FormInput from "../../../components/common/FormInput";
import Button from "../../../components/ui/Button/Button";

import auth_img from "../../../assets/img/login_img.jpg";
import "../../../assets/css/auth_form.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { registerPatient } from "../../../services/patientDataServices";

const form_left_style = {
  backgroundImage: `url(${auth_img})`,
};

const PatientRegister = () => {
  const navigate = useNavigate();

  const [dataValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    password: "",
    confirm_pass: "",
  });

  const submitEvent = async (formData) => {
    const { data } = await registerPatient(formData);
    if (data) {
      return navigate("/");
    }
  };

  return (
    <Form className="form" submitEvent={submitEvent} dataValues={dataValues}>
      <div className="form_left" style={form_left_style} />
      <div className="form_right">
        <div className="form_right_container">
          <div className="form_header">
            <h1>Patient Register</h1>
            <p>Register To Have an Account</p>
          </div>

          <div className="form_input_container">
            <FormInput label="First Name" name="first_name" />
          </div>

          <div className="form_input_container">
            <FormInput label="Last Name" name="last_name" />
          </div>

          <div className="form_input_container">
            <FormInput label="Contact" name="contact" />
          </div>

          <div className="form_input_container">
            <FormInput label="Email" name="email" type="email" />
          </div>

          <div className="form_input_container">
            <FormInput
              label="Confirm Password"
              name="confirm_pass"
              type="password"
            />
          </div>

          <div className="form_input_container">
            <FormInput label="Password" name="password" type="password" />
          </div>
          <div className="form_btn">
            <Button label="Register" />
          </div>

          <div className="form_question">
            <p>
              Already have an account?
              <span>
                <Link to="/patient/login">Log In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PatientRegister;
