import { useState } from "react";
import useDoctorData from "../hooks/useDoctorData";
import "../../../assets/css/settings.css";
import ProfileBar from "../../../components/common/ProfileBar";
import DoctorDashboard from "./DoctorDashboard";
import DoctorChangePass from "./DoctorChangePass";
import DoctorAccount from "./DoctorAccount";

const DoctorSettings = () => {
  const { doc: user } = useDoctorData();

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
    if (currLinkId === 0) return <DoctorDashboard user={user} />;
    if (currLinkId === 1) return <DoctorChangePass />;
    return <DoctorAccount />;
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

export default DoctorSettings;
