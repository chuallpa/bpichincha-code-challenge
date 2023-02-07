import React from "react";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { object, func } from "prop-types";

import "./styles.scss";

const TableRow = ({ data, actionDelete, actionEdit }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>
        <img className="avatar" alt="avatar" src={data.url} />
      </td>
      <td>{data.attack}</td>
      <td>{data.defense}</td>
      <td>
        <div className="actions">
          <VscEdit
            color="#6b54fd"
            onClick={() => {
              actionEdit(data);
            }}
          />
          <VscTrash
            color="#6b54fd"
            onClick={() => {
              actionDelete(data.id);
            }}
          />
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  actionDelete: func.isRequired,
  actionEdit: func.isRequired,
  data: object.isRequired,
};

export default TableRow;
