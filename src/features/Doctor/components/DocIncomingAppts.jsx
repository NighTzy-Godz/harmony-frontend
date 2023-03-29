import React from "react";
import "../../../assets/css/table.css";
import UserTableInfo from "../../../components/common/UserTableInfo";
import TableBody from "../../../components/ui/Table/TableBody";
import TableHeader from "../../../components/ui/Table/TableHeader";
import useIncomingAppts from "../hooks/useIncomingAppts";
import DocPostAppt from "./DocPostAppt";
import DoctorDecideAppt from "./DoctorDecideAppt";

const DocIncomingAppts = () => {
  const { appts } = useIncomingAppts();

  const columns = [
    {
      id: 0,
      label: "Patient",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} />
        </React.Fragment>
      ),

      className: "table-width-210",
    },

    { id: 1, label: "Date", path: "date", className: "table-width-210" },
    { id: 2, label: "Time", path: "time", className: "table-width-210" },
    { id: 3, label: "Amount", path: "amount", className: "table-width-210" },
    { id: 4, label: "Status", path: "status", className: "table-width-210" },
    {
      id: 5,
      label: "",
      xtraContent: (item) => (
        <React.Fragment>
          <DocPostAppt data={item} />
        </React.Fragment>
      ),
    },
  ];

  const renderContent = () => {
    if (appts.length === 0) return <h1>No Data Yet</h1>;
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody columns={columns} data={appts} />
        </table>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default DocIncomingAppts;
