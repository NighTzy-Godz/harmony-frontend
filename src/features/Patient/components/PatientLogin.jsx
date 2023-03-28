import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button/Button";
import "../../../assets/css/auth_form.css";
import auth_img from "../../../assets/img/login_img.jpg";
import Form from "../../../components/common/Form";
import FormInput from "../../../components/common/FormInput";
import { loginPatient } from "../../../services/patientDataServices";
import { setStorage } from "../../../utils/storage";

const form_left_style = {
  backgroundImage: `url(${auth_img})`,
};

const PatientLogin = () => {
  const [dataValues] = useState({
    email: "",
    password: "",
  });

  const submitEvent = async (data) => {
    const result = await loginPatient(data);
    if (result.status === 200) {
      try {
        setStorage("token", result.headers["x-auth-token"]);

        window.location = "/patient/settings";
      } catch (err) {}
    }
  };

  return (
    <Form className="form" submitEvent={submitEvent} dataValues={dataValues}>
      <div className="form_left" style={form_left_style} />
      <div className="form_right">
        <div className="form_right_container">
          <div className="form_header">
            <h1>Patient Login</h1>
            <p>Login To Your Account To Continue</p>
          </div>

          <div className="form_input_container">
            <FormInput label="Email" name="email" type="email" />
          </div>
          <div className="form_input_container">
            <FormInput label="Password" name="password" type="password" />
          </div>
          <div className="form_btn">
            <Button label="Login" />
          </div>

          <div className="form_question">
            <p>
              Don't have an account?
              <span>
                <Link to="/patient/register">Sign Up</Link>
              </span>
            </p>
          </div>

          <p className="form_other_auth">Not a Patient? Login with</p>

          <div className="form_auth_choices">
            <div className="form_auth_choices_container">
              <Link to="/">
                <i className="fa-solid fa-user-doctor"></i>
              </Link>
              <p>Doctor</p>
            </div>
            <div className="form_auth_choices_container">
              <Link to="/">
                <i className="fa-solid fa-gear"></i>
              </Link>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PatientLogin;
