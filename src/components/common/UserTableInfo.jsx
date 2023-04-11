import "../../assets/css/user_table_info.css";
import { getUser } from "../../utils/auth";

const UserTableInfo = ({ user, role = "", single = false }) => {
  const currUser = getUser();

  const getUserPicture = () => {
    if (currUser.role === "Admin") {
      if (single) return user.profile_pic;
      if (role === "Patient") return user.patient.profile_pic;
      if (role === "Doctor") return user.doctor.profile_pic;
    }
    if (currUser.role === "Patient") return user.doctor.profile_pic;
    return user.patient.profile_pic;
  };

  const getUserDetailHead = () => {
    if (currUser.role === "Admin") {
      if (single) return user.full_name;
      if (role === "Patient") return user.patient.full_name;
      if (role === "Doctor") return user.doctor.full_name;
    }

    if (currUser.role === "Patient") return user.doctor.full_name;
    return user.patient.full_name;
  };

  const getUserRole = () => {
    if (currUser.role === "Admin") {
      return role;
    }
    if (currUser.role === "Patient") return user.doctor.specialty;
    return "Patient";
  };

  return (
    <div className="info_container">
      <div className="info_img">
        <img src={getUserPicture()} alt="" />
      </div>
      <div className="info_details">
        <h3>{getUserDetailHead()}</h3>
        <p>{getUserRole()}</p>
      </div>
    </div>
  );
};

export default UserTableInfo;
