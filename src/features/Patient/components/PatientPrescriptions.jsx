import React, { useState } from "react";
import "../../../assets/css/table.css";
import Paginate from "../../../components/common/Paginate";
import paginate from "../../../utils/paginate";

import UserTableInfo from "../../../components/common/UserTableInfo";
import TableHeader from "../../../components/ui/Table/TableHeader";
import TableBody from "../../../components/ui/Table/TableBody";

import useGetPrescriptions from "../hooks/useGetPrescriptions";
import PatientDoneAppt from "./PatientDoneAppt";

import {
  deleteAppt,
  donePrescription,
} from "../../../services/patientDataServices";
import NoData from "../../../components/common/NoData";
const PatientPrescriptions = () => {
  const { prescript } = useGetPrescriptions();

  const [state, setState] = useState({
    pageSize: 5,
    currPage: 1,
  });

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

    {
      id: 3,
      label: "Prescription",
      path: "prescription",
      className: "table-width-210",
    },
    {
      id: 4,
      label: "Findings",
      path: "findings",
      className: "table-width-210",
    },

    {
      id: 5,
      label: "",
      xtraContent: (item) => (
        <React.Fragment>
          <PatientDoneAppt
            funcEvent={donePrescription}
            appt={item}
            color="var(--green)"
            label="Done"
          />
        </React.Fragment>
      ),
      className: "table-width-240",
    },
  ];

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const renderContent = () => {
    const { pageSize, currPage } = state;
    const newData = paginate(pageSize, prescript, currPage);

    if (prescript.length === 0)
      return (
        <NoData label="No Prescriptions was found at this moment. Kindly wait for the prescription of your Doctor." />
      );

    return (
      <React.Fragment>
        <div className="table_wrapper">
          <table>
            <TableHeader columns={columns} />
            <TableBody data={newData} columns={columns} />
          </table>
        </div>
        <Paginate
          itemCount={prescript.length}
          pageSize={pageSize}
          currPage={currPage}
          onPageChange={handlePageChange}
        />
      </React.Fragment>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default PatientPrescriptions;
