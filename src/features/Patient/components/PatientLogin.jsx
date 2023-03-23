import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button/Button";
import "../../../assets/css/auth_form.css";
import auth_img from "../../../assets/img/login_img.jpg";

const style = {
  backgroundImage: `url(${auth_img})`,
};

const PatientLogin = () => {
  return (
    <div className="form">
      <div className="form_left" style={style} />
      <div className="form_right">
        <div className="form_right_container">
          <div className="form_header">
            <h1>Patient Login</h1>
            <p>Login To Your Account To Continue</p>
          </div>

          <div className="form_input_container">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Type Here ..."
            />
          </div>
          <div className="form_input_container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              placeholder="Type Here ..."
            />
          </div>
          <div className="form_btn">
            <Button label="Login" />
          </div>

          <div className="form_question">
            <p>
              Don't have an account?
              <span>
                <Link to="/">Sign Up</Link>
              </span>
            </p>
          </div>

          <p className="form_other_auth">Not a Patient? Login with</p>

          <div className="form_auth_choices">
            <div className="form_auth_choices_container">
              <Link to="/">
                <i class="fa-solid fa-user-doctor"></i>
              </Link>
              <p>Doctor</p>
            </div>
            <div className="form_auth_choices_container">
              <Link to="/">
                <i class="fa-solid fa-gear"></i>
              </Link>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
