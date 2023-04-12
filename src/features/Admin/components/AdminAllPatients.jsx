import useAdminIncomingAppts from "../hooks/useAdminIncomingAppts";
import TableHeader from "../../../components/ui/Table/TableHeader";
import TableBody from "../../../components/ui/Table/TableBody";
import "../../../assets/css/table.css";
import UserTableInfo from "../../../components/common/UserTableInfo";
import React, { useState } from "react";
import NoData from "../../../components/common/NoData";
import paginate from "../../../utils/paginate";
import Paginate from "../../../components/common/Paginate";
import "../css/admin_all_patients.css";
import useGetAllPatients from "../hooks/useGetAllPatients";
import AdminBanUser from "./AdminBanUser";

const AdminAllPatients = () => {
  const { patients } = useGetAllPatients();

  const [state, setState] = useState({
    pageSize: 7,
    currPage: 1,
  });

  const columns = [
    {
      id: 0,
      label: "Patient",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} role="Patient" single={true} />
        </React.Fragment>
      ),
    },

    { id: 1, label: "E-mail", path: "email" },
    { id: 2, label: "Contact", path: "contact" },

    {
      id: 4,
      label: "Action",
      xtraContent: (item) => (
        <React.Fragment>
          <AdminBanUser data={item} ban="patient" />
        </React.Fragment>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const renderContent = () => {
    const { pageSize, currPage } = state;

    const newData = paginate(pageSize, patients, currPage);
    if (patients.length === 0)
      return (
        <NoData label="No Incoming Appointments at this moment. Please Comeback Later." />
      );
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody data={newData} columns={columns} />
        </table>
        <Paginate
          data={newData}
          itemCount={patients.length}
          pageSize={pageSize}
          currPage={currPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  };
  return (
    <div className="admin_all_patients">
      <div className="header">
        <h3>All Patients</h3>
        <p>
          Check the all of the Patients. You can control them by banning them.
        </p>
      </div>
      <div className="admin_table">{renderContent()}</div>
    </div>
  );
};

export default AdminAllPatients;
