import useAdminIncomingAppts from "../hooks/useAdminIncomingAppts";
import TableHeader from "../../../components/ui/Table/TableHeader";
import TableBody from "../../../components/ui/Table/TableBody";
import "../../../assets/css/table.css";
import UserTableInfo from "../../../components/common/UserTableInfo";
import React from "react";

const AdminIncomingAppts = () => {
  const { allAppts } = useAdminIncomingAppts();

  const columns = [
    {
      id: 0,
      label: "Patient",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} role="Patient" />
        </React.Fragment>
      ),
    },
    {
      id: 20,
      label: "Doctor",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} role="Doctor" />
        </React.Fragment>
      ),
    },
    { id: 1, label: "Date", path: "date" },
    { id: 2, label: "Time", path: "time" },
    { id: 3, label: "Mode", path: "mode_of_consult" },
    { id: 4, label: "Status", path: "status" },
  ];

  return (
    <div className="table_wrapper">
      <table>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={allAppts} />
      </table>
    </div>
  );
};

export default AdminIncomingAppts;
