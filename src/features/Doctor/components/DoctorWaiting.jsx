import { Link } from "react-router-dom";
import "../css/doc_waiting.css";
const DoctorWaiting = () => {
  return (
    <div className="doctor_waiting">
      <div className="doctor_waiting_container">
        <h1>
          You are not still confirmed by the admins. Please come back again
          later.
        </h1>
        <Link to="/logout">Log Out</Link>
      </div>
    </div>
  );
};

export default DoctorWaiting;
