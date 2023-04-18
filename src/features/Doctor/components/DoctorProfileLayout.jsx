import ProfileBar from "../../../components/common/ProfileBar";
import "../../../assets/css/settings.css";

import { Outlet, useNavigate } from "react-router-dom";
import useDoctorData from "../hooks/useDoctorData";
import { useEffect } from "react";

const DoctorProfileLayout = () => {
  const { doc: user } = useDoctorData();

  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(user).length !== 0 && !user.isConfirmed) {
      return navigate("/doctor/confirmation");
    }
  }, [user]);

  const profile_links = [
    {
      id: 0,
      icon: "fa-solid fa-table-columns",
      name: "Dashboard",
      link: "/doctor/dashboard",
    },
    {
      id: 1,
      icon: "fa-solid fa-lock",
      name: "Change Password",
      link: "/doctor/change-pass",
    },
    {
      id: 2,
      icon: "fa-solid fa-user",
      name: "Account",
      link: "/doctor/update-acc",
    },
  ];

  return (
    <div className="settings">
      <div className="container">
        <div className="settings_left">
          <ProfileBar user={user} profile_links={profile_links} />
        </div>
        <div className="settings_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileLayout;
