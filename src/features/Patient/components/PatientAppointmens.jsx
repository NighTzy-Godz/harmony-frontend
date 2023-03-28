import _ from "lodash";
import React from "react";
import UserTableInfo from "../../../components/common/UserTableInfo";
import "../../../assets/css/table.css";

import useGetAppointments from "../hooks/useGetAppointments";

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

  const renderCell = (data, column) => {
    if (column.xtraContent) return column.xtraContent(data);

    return (
      <p
        className={`text-center ${
          column.path === "status"
            ? "status " + _.get(data, column.path).toLowerCase()
            : ""
        }`}
      >
        {column.path === "amount" ? "₱" : ""} {_.get(data, column.path)}
      </p>
    );
  };

  return (
    <div className="table_wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((item) => {
              return <th key={item.id}>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {appts.map((items) => {
            return (
              <tr key={items._id}>
                {columns.map((column) => {
                  return (
                    <td key={column.id} className={column.className}>
                      {renderCell(items, column)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAppointments;
