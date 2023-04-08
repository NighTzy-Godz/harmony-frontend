import ProfileBar from "../../../components/common/ProfileBar";
import "../../../assets/css/settings.css";
import usePatientData from "../../../hooks/usePatientData";

import { Outlet } from "react-router-dom";

const PatientProfileLayout = () => {
  const { patient: user } = usePatientData();

  const profile_links = [
    {
      id: 0,
      icon: "fa-solid fa-table-columns",
      name: "Dashboard",
      link: "/patient/dashboard",
    },
    {
      id: 1,
      icon: "fa-solid fa-lock",
      name: "Change Password",
      link: "/patient/change-pass",
    },
    {
      id: 2,
      icon: "fa-solid fa-user",
      name: "Account",
      link: "/patient/update-acc",
    },
  ];

  return (
    <div className="settings">
      <div className="settings_container">
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

export default PatientProfileLayout;
