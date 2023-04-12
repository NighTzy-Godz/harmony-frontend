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
import PatientDoneAppt from "../../Patient/components/PatientDoneAppt";
import { adminAcceptDoctor } from "../../../services/adminDataServices";
import useUnconfirmedDoctors from "../hooks/useAllUncofirmedDocs";

const AdminPendingDoctors = () => {
  const { unconfirmedDocs } = useUnconfirmedDoctors();

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
    { id: 5, label: "Specialty", path: "specialty" },

    {
      id: 4,
      label: "Action",
      xtraContent: (item) => (
        <React.Fragment>
          <PatientDoneAppt
            appt={item}
            color="var(--green)"
            label="Accept Doctor"
            funcEvent={adminAcceptDoctor}
          />
        </React.Fragment>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const renderContent = () => {
    const { pageSize, currPage } = state;

    const newData = paginate(pageSize, unconfirmedDocs, currPage);
    if (unconfirmedDocs.length === 0)
      return (
        <NoData label="No Pending Doctor at this moment. Please Comeback Later." />
      );
    return (
      <div className="table_wrapper">
        <table>
          <TableHeader columns={columns} />
          <TableBody data={newData} columns={columns} />
        </table>
        <Paginate
          data={newData}
          itemCount={unconfirmedDocs.length}
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
        <h3>All Pending Doctors</h3>
        <p>
          Check all the current Pending Doctors. You can see basic information
          and wait for the HR to tell you that they are accepted.
        </p>
      </div>
      <div className="admin_table">{renderContent()}</div>
    </div>
  );
};

export default AdminPendingDoctors;
