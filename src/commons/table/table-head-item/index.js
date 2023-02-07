import React from "react";
import { string } from "prop-types";

const TableHeadItem = ({ item }) => {
  return <th title={item}>{item}</th>;
};

TableHeadItem.propTypes = {
  item: string.isRequired,
};

export default TableHeadItem;
