import useAdminIncomingAppts from "../hooks/useAdminIncomingAppts";
import TableHeader from "../../../components/ui/Table/TableHeader";
import TableBody from "../../../components/ui/Table/TableBody";
import "../../../assets/css/table.css";
import UserTableInfo from "../../../components/common/UserTableInfo";
import React, { useState } from "react";
import NoData from "../../../components/common/NoData";
import paginate from "../../../utils/paginate";
import Paginate from "../../../components/common/Paginate";
import "../css/admin_all_users.css";
import AdminBanUser from "./AdminBanUser";
import useAllDoctors from "../../../hooks/useAllDoctors";
import BoxShadowCard from "../../../components/ui/Card/BoxShadowCard";

const AdminAllDoctors = () => {
  const { allDoctors } = useAllDoctors();

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
          <UserTableInfo user={item} role="Doctor" single={true} />
        </React.Fragment>
      ),
    },

    { id: 1, label: "E-mail", path: "email" },

    { id: 2, label: "Contact", path: "contact" },
    { id: 8, label: "Specialty", path: "specialty" },
    { id: 5, label: "Current Rate", path: "rate" },

    {
      id: 4,
      label: "Action",
      xtraContent: (item) => (
        <React.Fragment>
          <AdminBanUser data={item} ban="doctor" />
        </React.Fragment>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const renderContent = () => {
    const { pageSize, currPage } = state;

    const newData = paginate(pageSize, allDoctors, currPage);
    if (allDoctors.length === 0)
      return (
        <NoData label="No Current Doctor at this moment. Please Comeback Later." />
      );
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody data={newData} columns={columns} />
        </table>
        <Paginate
          data={newData}
          itemCount={allDoctors.length}
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
        <h3>All Doctors</h3>
        <p>
          Check the current Doctors for the hospital. You can see basic
          information and can ban them if they disobey rules.
        </p>
      </div>
      <BoxShadowCard>{renderContent()}</BoxShadowCard>
    </div>
  );
};

export default AdminAllDoctors;
