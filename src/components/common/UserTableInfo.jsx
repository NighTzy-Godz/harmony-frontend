import "../../assets/css/user_table_info.css";
import { getUser } from "../../utils/auth";

const UserTableInfo = ({ user }) => {
  const currUser = getUser();
  console.log(currUser);

  const getUserPicture = () => {
    if (currUser.role === "Patient") return user.doctor.profile_pic;
    return user.patient.profile_pic;
  };

  const getUserDetail = () => {
    if (currUser.role === "Patient") return user.doctor.full_name;
    return user.patient.profile_pic;
  };

  return (
    <div className="info_container">
      <div className="info_img">
        <img src={getUserPicture()} alt="" />
      </div>
      <div className="info_details">
        <h3>{getUserDetail()}</h3>
        <p>Patient</p>
      </div>
    </div>
  );
};

export default UserTableInfo;
