import _ from "lodash";
import React, { useEffect, useState } from "react";
import UserTableInfo from "../../../components/common/UserTableInfo";
import TableHeader from "../../../components/ui/Table/TableHeader";

import "../../../assets/css/table.css";

import TableBody from "../../../components/ui/Table/TableBody";
import Paginate from "../../../components/common/Paginate";
import paginate from "../../../utils/paginate";
import PatientDoneAppt from "./PatientDoneAppt";
import { deleteAppt } from "../../../services/patientDataServices";
import useGetMedicalRecs from "../hooks/useGetMedicalRecs";
import NoData from "../../../components/common/NoData";

const PatientMedicalRecords = () => {
  const { records } = useGetMedicalRecs();
  const [state, setState] = useState({
    pageSize: 5,
    currPage: 1,
  });

  const columns = [
    {
      id: 0,
      label: "Created By",
      xtraContent: (item) => (
        <React.Fragment>
          <UserTableInfo user={item} />
        </React.Fragment>
      ),
      className: "table-width-240",
    },
    { id: 1, label: "Date", path: "date", className: "table-width-210" },

    { id: 3, label: "Time", path: "time", className: "table-width-210" },
    { id: 4, label: "Status", path: "status", className: "table-width-210" },
    {
      id: 5,
      label: "",
      xtraContent: (item) => (
        <React.Fragment>
          {item.status === "Pending" ? null : (
            <PatientDoneAppt
              funcEvent={deleteAppt}
              appt={item}
              label="Remove"
            />
          )}
        </React.Fragment>
      ),
      className: "table-width-240",
    },
  ];

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const renderContent = () => {
    const { currPage, pageSize } = state;
    let newData = paginate(pageSize, records, currPage);
    if (records.length === 0)
      return (
        <NoData label="No Medical Records was found. Either you dont have an appointment or just kindly complete your prescriptions first and the records of you appointments will appear here." />
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
          data={newData}
          itemCount={records.length}
          pageSize={pageSize}
          currPage={currPage}
          removable={true}
          onPageChange={handlePageChange}
        />
      </React.Fragment>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default PatientMedicalRecords;
