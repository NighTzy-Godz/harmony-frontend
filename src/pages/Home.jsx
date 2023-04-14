import "./css/home.css";
import LinkButton from "../components/ui/Button/LinkButton";

import home_bg from "../assets/img/home_bg.jpg";
import chooseImg from "../assets/img/chooseImg.jpg";
import pharmacyImg from "../assets/img/pharmacy.png";
import surgeryImg from "../assets/img/surgery.png";
import patient_wardImg from "../assets/img/patient_ward.png";
import emergencyImg from "../assets/img/emergency.png";
import React from "react";
import FeatureBox from "./FeatureBox";

const landing_page_style = {
  background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${home_bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing_page" style={landing_page_style}>
        <div className="container">
          <div className="landing_main_text">
            <h1>
              Giving Power to Your <span>Health</span>
            </h1>
            <p>
              Take your healthcare facility to the next level with our powerful
              management system app. Designed to simplify your processes and
              improve patient outcomes.
            </p>
          </div>
          <div className="landing_btn">
            <LinkButton label="Find a Doctor" path="/all-doctors" />
          </div>
        </div>
      </div>

      <div className="choose">
        <div className="container">
          <div className="choose_img">
            <img src={chooseImg} alt="" />
          </div>
          <div className="choose_text">
            <h1>
              Why <span>choose </span> <br /> our Medical Harmony?
            </h1>
            <p>
              We offer a wide range of medical specialties, from cardiology and
              oncology to neurology and pediatrics, to ensure that patients
              receive personalized and comprehensive care.
            </p>

            <ul>
              <li className="d-flex">
                <i className="fa-solid fa-circle-check"></i>
                <p className="font_bold">Modern Technology</p>
              </li>
              <li className="d-flex">
                <i className="fa-solid fa-circle-check"></i>
                <p className="font_bold">Expert Doctors</p>
              </li>
              <li className="d-flex">
                <i className="fa-solid fa-circle-check"></i>
                <p className="font_bold">Affordable Price</p>
              </li>
              <li className="d-flex">
                <i className="fa-solid fa-circle-check"></i>
                <p className="font_bold">Excellent Feedback</p>
              </li>
              <li className="d-flex">
                <i className="fa-solid fa-circle-check"></i>
                <p className="font_bold">Active Help Support</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home_feature">
        <div className="container">
          <div className="home_feature_text">
            <h1>Available Features in Our Hospital</h1>
            <p>
              Here are some of the features that you can find in our Hospital
              when you visit us.
            </p>
          </div>

          <div className="home_feature_container">
            <FeatureBox img={pharmacyImg} label="Pharmacy Ready" />
            <FeatureBox img={emergencyImg} label="Emergecy Calls" />
            <FeatureBox img={surgeryImg} label="Successfull Operations" />
            <FeatureBox img={patient_wardImg} label="Patient Care" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
