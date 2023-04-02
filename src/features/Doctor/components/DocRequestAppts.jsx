import useReqAppts from "../hooks/useReqAppts";
import React from "react";
import UserTableInfo from "../../../components/common/UserTableInfo";
import TableBody from "../../../components/ui/Table/TableBody";
import TableHeader from "../../../components/ui/Table/TableHeader";
import DoctorDecideAppt from "./DoctorDecideAppt";
import NoData from "../../../components/common/NoData";

const DocRequestAppts = () => {
  const { appts } = useReqAppts();

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
          <DoctorDecideAppt appt={item} />
        </React.Fragment>
      ),
    },
  ];
  const renderContent = () => {
    if (appts.length === 0)
      return (
        <NoData label="No Request Appointments at this moment. Please Comeback Later." />
      );
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody data={appts} columns={columns} />
        </table>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default DocRequestAppts;
