import useAdminIncomingAppts from "../hooks/useAdminIncomingAppts";
import TableHeader from "../../../components/ui/Table/TableHeader";
import TableBody from "../../../components/ui/Table/TableBody";
import "../../../assets/css/table.css";
import UserTableInfo from "../../../components/common/UserTableInfo";
import React from "react";
import useAdminPastAppts from "../hooks/useAdminPastAppts";
import NoData from "../../../components/common/NoData";

const AdminPastAppts = () => {
  const { allPastAppts } = useAdminPastAppts();

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
    { id: 2, label: "Findings", path: "findings" },
    { id: 3, label: "Mode", path: "mode_of_consult" },
    { id: 4, label: "Status", path: "status" },
  ];

  const renderContent = () => {
    if (allPastAppts.length === 0)
      return (
        <NoData label="No Past Appointments at this moment. Please Comeback Later." />
      );
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody data={allPastAppts} columns={columns} />
        </table>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default AdminPastAppts;
