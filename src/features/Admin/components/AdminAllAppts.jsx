import React, { useEffect, useState } from "react";
import AdminIncomingAppts from "./AdminIncomingAppts";
import AdminPastAppts from "./AdminPastAppts";
import "../css/admin_all_appts.css";

const AdminAllAppts = () => {
  const [currContent, setCurrContent] = useState({});
  const table_tabs = [
    {
      id: 0,
      label: "Incoming Appointments",
      content: <AdminIncomingAppts />,
    },
    {
      id: 1,
      label: "Past Appointments",
      content: <AdminPastAppts />,
    },
  ];

  useEffect(() => {
    setCurrContent(table_tabs[0]);
  }, []);

  const renderTabs = table_tabs.map((item) => {
    return (
      <li
        key={item.id}
        className={`${currContent.id === item.id ? "active" : ""}`}
        onClick={() => setCurrContent(item)}
      >
        {item.label}
      </li>
    );
  });

  const renderContent = () => {
    return currContent.content;
  };

  return (
    <div className="admin_all_appts">
      <div className="header">
        <h3>
          Hello Admin, kindly check all the incoming and past appointments.
        </h3>
      </div>

      <div className="admin_table">
        <ul className="admin_table_ul">{renderTabs}</ul>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminAllAppts;
