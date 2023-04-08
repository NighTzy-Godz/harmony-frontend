import "../../../assets/css/doctor_card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { FormContext } from "../../common/Form";

const DoctorCard = ({ data, user, step, onStepChange, onDocIdChange }) => {
  const navigate = useNavigate();
  const formContext = useContext(FormContext);
  const { data: formData } = formContext;

  const btnEvent = () => {
    if (!user) {
      toast.info(`You need to login first to book Dr. ${data.first_name}`, {
        autoClose: 2000,
      });
      return navigate("/patient/login");
    }

    formData.doc_id = data._id;
    onStepChange(step + 1);
  };

  return (
    <div className="doctor_card">
      <div className="doctor_card_img">
        <img loading="lazy" src={data.profile_pic} alt="" />
      </div>
      <div className="doctor_card_details">
        <div className="doctor_card_row justify-between">
          <h3>{data.full_name}</h3>
          <p>{data.specialty}</p>
        </div>

        <div className="doctor_card_row">
          <i className="fa-solid fa-address-card"></i>
          <p className="font_reg contact">{data.contact}</p>
        </div>
        <div className="doctor_card_row">
          <i className="fa-solid fa-money-check-dollar"></i>
          <p className="font_reg rate">P{data.rate}</p>
        </div>
        <div className="gender doctor_card_row">
          {data.gender === "Male" ? (
            <i className="fa-solid fa-person" />
          ) : (
            <i className="fa-solid fa-person-dress" />
          )}
          <p>{data.gender === "Male" ? "Male" : "Female"}</p>
        </div>

        <div className="doctor_card_btn">
          <p onClick={btnEvent}>{!user ? "Book Me" : "Select Me"}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
