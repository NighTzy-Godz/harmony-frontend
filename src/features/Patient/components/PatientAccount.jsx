import React, { useEffect, useState } from "react";

import Button from "../../../components/ui/Button/Button";

import "../../../assets/css/user_update.css";
import {
  getPatientData,
  patientUpdateAccount,
} from "../../../services/patientDataServices";
import { useNavigate } from "react-router-dom";

const PatientAccount = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await getPatientData();
      const { first_name, last_name, contact, email } = data;

      setState({ ...state, first_name, last_name, contact, email });
    };
    getData();
  }, []);

  const submitEvent = async (e) => {
    e.preventDefault();
    const { first_name, last_name, contact, email, img } = state;

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("contact", contact);
    formData.append("email", email);

    if (img !== undefined) {
      formData.append("img", img);
    }

    console.log(formData);

    await patientUpdateAccount(formData);

    // const result = await patientUpdatePassword(data);
    // try {
    //   if (result.status === 200) return navigate("/patient/settings");
    // } catch (error) {
    //   return;
    // }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={submitEvent}
        encType="multipart/form-data"
        className="account_update"
      >
        <h1>Update Your Account</h1>
        <div className=" form_input_container">
          <label htmlFor={"first_name"} className="font_reg">
            First Name
          </label>
          <input
            type="text"
            name={"first_name"}
            id={"first_name"}
            className="font_light"
            value={state.first_name}
            onChange={(e) =>
              setState({ ...state, first_name: e.currentTarget.value })
            }
          />
        </div>
        <div className=" form_input_container">
          <label htmlFor={"last_name"} className="font_reg">
            Last Name
          </label>
          <input
            type="text"
            name={"last_name"}
            id={"last_name"}
            className="font_light"
            value={state.last_name}
            onChange={(e) =>
              setState({ ...state, last_name: e.currentTarget.value })
            }
          />
        </div>

        <div className="form_input_container ">
          <label htmlFor={"contact"} className="font_reg">
            Contact
          </label>
          <input
            type="text"
            name={"contact"}
            id={"contact"}
            className="font_light"
            value={state.contact}
            onChange={(e) =>
              setState({ ...state, contact: e.currentTarget.value })
            }
          />
        </div>
        <div className="form_input_container ">
          <label htmlFor={"email"} className="font_reg">
            Last Name
          </label>
          <input
            type="email"
            name={"email"}
            id={"email"}
            className="font_light"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.currentTarget.value })
            }
          />
        </div>
        <div className="file-upload">
          <div className="file-content">
            <label htmlFor={"img"} className="font_reg">
              <i className="fa-solid fa-upload"></i>
              Select a picture.
            </label>
            <input
              type="file"
              name="img"
              id="img"
              multiple
              onChange={(e) => setState({ ...state, img: e.target.files[0] })}
            />
            <p className="font_light">
              Allowed Formats - JPG,JPEG and PNG (Optional to upload.)
              <br />
              {state.img ? state.img.name : "No picture was uploaded yet."}
            </p>
          </div>
        </div>

        <div className="btn">
          <Button label="Update Account" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default PatientAccount;
