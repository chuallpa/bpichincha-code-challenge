import React from "react";
import TableRow from "./table-row";
import TableHeadItem from "./table-head-item";

import "./styles.scss";

const Table = ({
  theadData,
  tbodyData,
  customClass,
  actionDelete,
  actionEdit,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return (
            <TableRow
              key={item.id}
              data={item}
              actionDelete={actionDelete}
              actionEdit={actionEdit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
