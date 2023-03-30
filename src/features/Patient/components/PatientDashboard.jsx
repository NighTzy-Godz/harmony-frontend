import "../../../assets/css/user_dashboard.css";

import HealthStatusBox from "./HealthStatusBox";
import React, { useEffect, useState } from "react";
import health_data from "../utils/health_status";
import PatientAppointments from "./PatientAppointmens";
import PatientPrescriptions from "./PatientPrescriptions";
import PatientMedicalRecord from "./PatientMedicalRecords";

const PatientDashboard = ({ user }) => {
  const { first_name } = user;
  const [currContent, setCurrContent] = useState({});

  const table_tabs = [
    {
      id: 0,
      name: "Appointments",
      content: <PatientAppointments />,
    },
    {
      id: 1,
      name: "Prescriptions",
      content: <PatientPrescriptions />,
    },
    {
      id: 2,
      name: "Medical Records",
      content: <PatientMedicalRecord />,
    },
  ];

  useEffect(() => {
    setCurrContent(table_tabs[0]);
  }, []);

  const renderHealthStatus = health_data.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <HealthStatusBox data={item} />
      </React.Fragment>
    );
  });

  const renderContent = () => {
    return currContent.content;
  };

  const handleTab = (tab) => {
    setCurrContent(tab);
  };

  return (
    <div className="user_dashboard">
      <div className="user_greet">
        <h2>Hello, {first_name}</h2>
        <p>Check the current status of your health and your dashboard.</p>
      </div>
      <div className="user_short_status">{renderHealthStatus}</div>
      <div className="user_table">
        <div className="user_tab">
          <ul>
            {table_tabs.map((item) => {
              return (
                <li
                  className={`${currContent.id === item.id ? "active" : ""}`}
                  onClick={() => handleTab(item)}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default PatientDashboard;
