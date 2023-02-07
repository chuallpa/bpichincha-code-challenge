import React from 'react';
import TableRow from './table-row';
import TableHeadItem from './table-head-item';
import { arrayOf, string, func, object, shape } from 'prop-types';

import './styles.scss';

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
          {theadData.map(h => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map(item => {
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

Table.propTypes = {
  actionDelete: func.isRequired,
  actionEdit: func.isRequired,
  customClass: string,
  tbodyData: arrayOf(shape({})).isRequired,
  theadData: arrayOf(string).isRequired,
};

Table.defaultProps = {
  customClass: '',
};

export default Table;
