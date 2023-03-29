import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/auth_form.css";
import auth_img from "../../../assets/img/login_img.jpg";
import Form from "../../../components/common/Form";
import FormInput from "../../../components/common/FormInput";
import Button from "../../../components/ui/Button/Button";
import { loginDoctor } from "../../../services/doctorDataServices";
import { setStorage } from "../../../utils/storage";

const form_left_style = {
  backgroundImage: `url(${auth_img})`,
};

const DoctorLogin = () => {
  const [dataValues] = useState({
    email: "",
    password: "",
  });

  const submitEvent = async (formData) => {
    const result = await loginDoctor(formData);

    if (!result) return;

    if (result.status === 200) {
      try {
        setStorage("token", result.headers["x-auth-token"]);
        return (window.location = "/doctor/settings");
      } catch (error) {}
    }
  };

  return (
    <Form className="form" submitEvent={submitEvent} dataValues={dataValues}>
      <div className="form_left" style={form_left_style} />
      <div className="form_right">
        <div className="form_right_container">
          <div className="form_header">
            <h1>Doctor Login</h1>
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
                <Link to="/doctor/register">Sign Up</Link>
              </span>
            </p>
          </div>

          <p className="form_other_auth">Not a Doctor? Login with</p>

          <div className="form_auth_choices">
            <div className="form_auth_choices_container">
              <Link to="/patient/login">
                <i className="fa-solid fa-user"></i>
              </Link>
              <p>Patient</p>
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

export default DoctorLogin;
