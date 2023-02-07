import React, { useReducer, useState } from "react";

import Table from "./commons/table";
import Modal from "./commons/modal";
import Button from "./commons/button";
import InputText from "./commons/input-text";
import useToggle from "./hooks/useToggle";
import { TABLE_HEADERS, TABLE_DATA } from "./constants/table";

import "./app.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { data: [...state.data, action.payload] };
    case "delete":
      const newState = state.data.filter((val) => val.id !== action.payload);
      return { data: newState };
    case "update":
      const { payload } = action;
      const newStateUpdated = state.data.map((el, index) => {
        if (index === payload.indexToUpdate)
          return Object.assign({}, payload.pokemon);
        return el;
      });
      return { data: newStateUpdated };
    case "search":
      const newDataSearched = state.data.filter((el) =>
        el.name.includes(action.payload)
      );
      return { data: [...state.data], recovery: newDataSearched };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, TABLE_DATA);
  const [pokemonToEdit, setPokemonToEdit] = useState(null);
  const [search, setSearch] = useState("");
  const { isEnabled, toggle } = useToggle();
  

  const actionAdd = (payload) => {
    dispatch({ type: "add", payload });
  };

  const actionDelete = (payload) => {
    dispatch({ type: "delete", payload });
  };

  const actionUpdate = (pokemon) => {
    let indexToUpdate = null;
    state.data.forEach((element, index) => {
      if (element.id === pokemon.id) {
        indexToUpdate = index;
      }
    });
    dispatch({ type: "update", payload: { indexToUpdate, pokemon } });
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h4>Listado de Pokemon</h4>
        <div className="header">
          <InputText
            icon
            placeholder="Buscar"
            name="search"
            value={search}
            onChange={(_, value) => {
              setSearch(value);
              dispatch({ type: "search", payload: value });
            }}
          />
          <Button
            title="Nuevo"
            onClick={(e) => {
              toggle();
              setSearch();
            }}
            icon="add"
          />
        </div>
      </div>
      <div className="app-table">
        <Table
          theadData={TABLE_HEADERS}
          tbodyData={search ? state.recovery : state.data}
          actionEdit={(pokemon) => {
            setPokemonToEdit(pokemon);
            toggle();
          }}
          actionDelete={actionDelete}
        />
      </div>
      <Modal
        show={isEnabled}
        title={`${pokemonToEdit ? "Editar" : "Nuevo"} Pokemon`}
        onClose={toggle}
        actionAdd={actionAdd}
        actionUpdate={actionUpdate}
        editPokemon={pokemonToEdit}
        setPokemonToEdit={setPokemonToEdit}
      />
    </div>
  );
};

export default App;
