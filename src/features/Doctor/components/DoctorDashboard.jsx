import React, { useEffect, useState } from "react";
import docShortStatus from "../utils/doc_short_status";

import DocIncomingAppts from "./DocIncomingAppts";
import DocRequestAppts from "./DocRequestAppts";

import useDoctorData from "../hooks/useDoctorData";
import DashboardStatusBox from "../../../components/ui/Card/DashboardStatusBox";
import BoxShadowCard from "../../../components/ui/Card/BoxShadowCard";

const DoctorDashboard = () => {
  const { doc } = useDoctorData();
  const { first_name, specialty } = doc;
  const [currContent, setCurrContent] = useState({});
  const doc_short_status = docShortStatus(specialty);

  const table_tabs = [
    {
      id: 0,
      name: "Request Appointments",
      content: <DocRequestAppts />,
    },
    {
      id: 1,
      name: "Incoming Appointments",
      content: <DocIncomingAppts />,
    },
  ];

  useEffect(() => {
    setCurrContent(table_tabs[0]);
  }, []);

  const render_doc_status = doc_short_status.map((item) => {
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
        <p>Check the current status of your patients and your dashboard.</p>
      </div>
      <div className="user_short_status">{render_doc_status}</div>
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

        <div className="user_tab_content">{renderContent()}</div>
      </BoxShadowCard>
    </div>
  );
};

export default DoctorDashboard;
