import "../../../assets/css/user_dashboard.css";

import React, { useEffect, useState } from "react";
import getAdminStatus from "../utils/admin_status";

import HealthStatusBox from "../../../components/ui/Card/DashboardStatusBox";
import useAdminData from "../hooks/useAdminData";

const AdminDashboard = () => {
  const { admin: user } = useAdminData();
  const { full_name } = user;
  const admin_status = getAdminStatus(user);

  const renderAdminStatus = admin_status.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <HealthStatusBox data={item} />
      </React.Fragment>
    );
  });

  return (
    <div className="user_dashboard">
      <div className="user_greet">
        <h2>Hello, {full_name}</h2>
        <p>Check the current status of your Hospital and your dashboard.</p>
      </div>
      <div className="user_short_status">{renderAdminStatus}</div>
    </div>
  );
};

export default AdminDashboard;
