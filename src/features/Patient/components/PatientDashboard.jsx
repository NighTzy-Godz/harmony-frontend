import "../../../assets/css/user_dashboard.css";

import React, { useEffect, useState } from "react";
import health_data from "../utils/health_status";
import PatientAppointments from "./PatientAppointmens";
import PatientPrescriptions from "./PatientPrescriptions";
import PatientMedicalRecord from "./PatientMedicalRecords";
import usePatientData from "../../../hooks/usePatientData";
import BoxShadowCard from "../../../components/ui/Card/BoxShadowCard";
import DashboardStatusBox from "../../../components/ui/Card/DashboardStatusBox";

const PatientDashboard = () => {
  const { patient: user } = usePatientData();
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
        <DashboardStatusBox data={item} />
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
      <BoxShadowCard>
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
      </BoxShadowCard>
    </div>
  );
};

export default PatientDashboard;
