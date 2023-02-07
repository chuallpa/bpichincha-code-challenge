import React, { useState } from "react";

import Button from "../button";
import InputText from "../input-text";

import "./styles.scss";

const Header = ({ onNewClick }) => {
  const [search, setSearch] = useState("");

  console.log("search", search);

  return (
    <div className="header">
      <InputText
        icon="search"
        placeholder="Buscar"
        name="search"
        value={search}
        onChange={(_, item) => {
          setSearch(item);
        }}
      />
      <Button title="Nuevo" onClick={onNewClick} icon="add" />
    </div>
  );
};

export default Header;
