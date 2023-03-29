import _ from "lodash";
import React from "react";

const TableBody = ({ data, columns }) => {
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
    <React.Fragment>
      <tbody>
        {data.map((items) => {
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
    </React.Fragment>
  );
};

export default TableBody;
