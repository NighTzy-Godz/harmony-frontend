import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {columns.map((item) => {
            return <th key={item.id}>{item.label}</th>;
          })}
        </tr>
      </thead>
    </React.Fragment>
  );
};

export default TableHeader;
