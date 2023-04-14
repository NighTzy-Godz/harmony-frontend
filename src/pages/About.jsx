import React from "react";
import about_bg from "../assets/img/about.jpg";
import "./css/about.css";

const aboutStyle = {
  background: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${about_bg})`,
  minHeight: "550px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const About = () => {
  return (
    <React.Fragment>
      <div className="about" style={aboutStyle}>
        <div className="container">
          <div className="content">
            <h1>About Us</h1>
            <p>
              At our hospital, we're committed to providing exceptional patient
              care through the use of innovative technology and streamlined
              management solutions. Our hospital management system app is
              designed to make healthcare management easier and more efficient
              than ever before.
            </p>
            <p>
              With features like patient records management, staff scheduling,
              and real-time reporting, our app empowers healthcare providers to
              deliver superior patient care and achieve better outcomes.
            </p>
            <p>
              Whether you're a hospital administrator or a medical professional,
              our medical is the all-in-one solution you need to optimize your
              operations and improve patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="mission_vision">
        <div className="container">
          <div className="header">
            <h1>Mission and Vision</h1>
          </div>

          <div className="content">
            <h1>Mission</h1>
            <p>
              Our mission is to provide exceptional patient care through the use
              of innovative technology and streamlined management solutions, and
              to empower healthcare providers to achieve better outcomes and
              improve the health of their communities. We believe that every
              patient deserves the highest quality care, and that technology can
              play a transformative role in making this a reality. We are also
              committed to empowering healthcare providers to achieve better
              outcomes and improve the health of their communities. We believe
              that healthcare is a collective responsibility, and that by
              working together, we can create a healthier, more equitable world.
            </p>
          </div>
          <div className="content">
            <h1>Vision</h1>
            <p>
              Our vision is to be a leader in healthcare management, leveraging
              cutting-edge technology and data-driven insights to transform the
              way healthcare is delivered. We strive to create a world where
              access to high-quality healthcare is universal, and where patients
              receive the best possible care regardless of their location or
              circumstances. We envision a future where healthcare is
              accessible, equitable, and patient-centered. We believe that
              technology and data-driven insights can be powerful tools in
              achieving this vision, and we strive to be at the forefront of
              innovation in healthcare management.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
