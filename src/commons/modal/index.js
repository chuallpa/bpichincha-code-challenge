import React, { useState, useEffect } from "react";
import { bool, func, string, object } from "prop-types";

import Button from "../button";
import InputText from "../input-text";
import InputSlider from "../input-slider";
import CrossIcon from "../../assets/icons/icon-cross.svg";

import "./styles.scss";

const initState = { id: "", name: "", url: "", attack: 0, defense: 0 };

const Modal = ({
  show,
  onClose,
  title,
  actionAdd,
  actionUpdate,
  editPokemon,
  setPokemonToEdit,
}) => {
  const [pokemon, setPokemon] = useState(initState);

  useEffect(() => {
    if (editPokemon) {
      setPokemon(editPokemon);
    }
  }, [editPokemon]);

  const handleOnClose = () => {
    setPokemon(initState);
    setPokemonToEdit(null);
    onClose();
  };

  return (
    <div
      className={`modal ${show ? "modal--show" : ""}`}
      onClick={handleOnClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cross-icon">
          <img alt="X" onClick={handleOnClose} src={CrossIcon} />
        </div>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">
          <div className="inputs-text">
            <InputText
              name="name"
              label="Nombre"
              placeholder="Pokemon"
              value={pokemon.name}
              onChange={(name, item) => {
                if (!editPokemon) {
                  setPokemon({ ...pokemon, id: item, [name]: item });
                } else {
                  setPokemon({ ...pokemon, [name]: item });
                }
              }}
            />
            <InputText
              name="url"
              label="Imagen"
              placeholder="Url"
              value={pokemon.url}
              onChange={(name, item) => {
                setPokemon({ ...pokemon, [name]: item });
              }}
            />
          </div>
          <div className="inputs-slider">
            <InputSlider
              name="attack"
              label="Ataque"
              value={pokemon.attack}
              onChange={(name, item) => {
                setPokemon({ ...pokemon, [name]: item });
              }}
            />
            <InputSlider
              name="defense"
              label="Defensa"
              value={pokemon.defense}
              onChange={(name, item) => {
                setPokemon({ ...pokemon, [name]: item });
              }}
            />
          </div>
        </div>
        <div className="modal-footer-button">
          <Button
            onClick={() => {
              if (editPokemon) {
                actionUpdate(pokemon);
              } else {
                actionAdd(pokemon);
              }
              handleOnClose();
            }}
            title="Guardar"
            icon="save"
          ></Button>
          <Button onClick={onClose} title="Cancelar" icon="cancel"></Button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: bool.isRequired,
  onClose: func.isRequired,
  title: string.isRequired,
  actionAdd: func.isRequired,
  pokemon: object,
};

Modal.defaultProps = {
  pokemon: null,
};

export default Modal;
