import ProfileBar from "../../../components/common/ProfileBar";
import "../../../assets/css/settings.css";
import usePatientData from "../../../hooks/usePatientData";
import { getUser } from "../../../utils/auth";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import PatientChangePass from "./PatientChangePass";
import PatientAccount from "./PatientAccount";
import PatientDashboard from "./PatientDashboard";

const PatientSettings = () => {
  const { patient: user } = usePatientData();

  const [state, setState] = useState({
    currLinkId: 0,
  });

  const profile_links = [
    {
      id: 0,
      icon: "fa-solid fa-table-columns",
      name: "Dashboard",
    },
    {
      id: 1,
      icon: "fa-solid fa-lock",
      name: "Change Password",
    },
    {
      id: 2,
      icon: "fa-solid fa-user",
      name: "Account",
    },
  ];

  const handleLinkChange = (id) => {
    setState({ ...state, currLinkId: id });
  };

  const renderContent = () => {
    const { currLinkId } = state;
    if (currLinkId === 0) return <PatientDashboard user={user} />;
    if (currLinkId === 1) return <PatientChangePass />;
    if (currLinkId === 2) return <PatientAccount />;
  };

  return (
    <div className="settings">
      <div className="settings_container">
        <div className="settings_left">
          <ProfileBar
            currLinkId={state.currLinkId}
            user={user}
            profile_links={profile_links}
            onLinkChange={handleLinkChange}
          />
        </div>
        <div className="settings_right">{renderContent()}</div>
      </div>
    </div>
  );
};

export default PatientSettings;
