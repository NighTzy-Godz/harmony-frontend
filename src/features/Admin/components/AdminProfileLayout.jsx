import ProfileBar from "../../../components/common/ProfileBar";
import "../../../assets/css/settings.css";

import { Outlet } from "react-router-dom";

import useAdminData from "../hooks/useAdminData";

const AdminProfileLayout = () => {
  const { admin: user } = useAdminData();

  const profile_links = [
    {
      id: 0,
      icon: "fa-solid fa-table-columns",
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      id: 3,
      icon: "fa-regular fa-calendar",
      name: "All Appointments",
      link: "/admin/all-appts",
    },
    {
      id: 1,
      icon: "fa-solid fa-lock",
      name: "Change Password",
      link: "/admin/change-pass",
    },
    {
      id: 2,
      icon: "fa-solid fa-user",
      name: "Account",
      link: "/admin/update-acc",
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

export default AdminProfileLayout;
