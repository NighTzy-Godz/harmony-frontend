import Button from "../Button/Button";
import "../../../assets/css/doctor_card.css";

const DoctorCard = () => {
  return (
    <div className="doctor_card">
      <div className="doctor_card_img">
        <img
          src="https://ahaliagroup.com/ahm/wp-content/uploads/2020/05/default_dr.jpg"
          alt=""
        />
      </div>
      <div className="doctor_card_details">
        <div className="doctor_card_row justify-between">
          <h3>Full Name Here</h3>
          <p>Specialty</p>
        </div>

        <div className="doctor_card_row">
          <i className="fa-solid fa-address-card"></i>
          <p className="font_reg contact">09984907193</p>
        </div>
        <div className="doctor_card_row">
          <i className="fa-solid fa-money-check-dollar"></i>
          <p className="font_reg rate">P550</p>
        </div>
        <div className="doctor_card_btn">
          <Button label="Book Me" />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
