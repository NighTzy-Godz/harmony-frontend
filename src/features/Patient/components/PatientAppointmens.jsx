import _ from "lodash";
import React from "react";
import UserTableInfo from "../../../components/common/UserTableInfo";
import TableHeader from "../../../components/ui/Table/TableHeader";

import "../../../assets/css/table.css";

import useGetAppointments from "../hooks/useGetAppointments";
import TableBody from "../../../components/ui/Table/TableBody";

const PatientAppointments = () => {
  const { appts } = useGetAppointments();

  const columns = [
    {
      id: 0,
      label: "Doctor",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} />
        </React.Fragment>
      ),
      className: "table-width-240",
    },
    { id: 1, label: "Date", path: "date", className: "table-width-210" },
    { id: 2, label: "Time", path: "time", className: "table-width-210" },
    { id: 3, label: "Amount", path: "amount", className: "table-width-210" },
    { id: 4, label: "Status", path: "status", className: "table-width-210" },
  ];

  return (
    <div className="table_wrapper">
      <table>
        <TableHeader columns={columns} />
        <TableBody data={appts} columns={columns} />
      </table>
    </div>
  );
};

export default PatientAppointments;
