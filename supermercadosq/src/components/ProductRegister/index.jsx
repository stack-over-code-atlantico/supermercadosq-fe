import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import {
  Buttons,
  ImageUpload,
  RegisterContainer,
  RegisterForm,
} from "./styles";
import Select from "react-select";

const ProductRegister = () => {
  const alergicOptions = [
    { value: "peixe", label: "Peixe" },
    { value: "ovo", label: "Ovo" },
    { value: "soja", label: "Soja" },
  ];


  const customStyles = {
    // menu: (provided, state) => ({
    //   ...provided,
    //   padding: 10,
    // }),
    input: (provided, state) => ({
      ...provided,
      height: 120,

    }),
    // placeholder: (provided, state) => ({
    //   ...provided,
    //   width: 30,
    // }),
    // valueContainer: (provided, state) => ({
    //   ...provided,
    //   textOverflow: "ellipsis",
    //   maxWidth: "90%",
    //   whiteSpace: "nowrap",
    //   overflow: "hidden",
    //   display: "initial",
    // }),
  };

  return (
    <RegisterContainer>
      <ImageUpload>
        <BsPlusCircle />
      </ImageUpload>
      <RegisterForm>
        <h2>Crie sua postagem sobre algum produto</h2>
        <div className="ProductInitial">
          <label>
            <span>Nome</span>
            <input type="text" placeholder="Nome" />
          </label>
          <label>
            <span>Tipos de alergia</span>
            <Select
              closeMenuOnSelect={false}
              //defaultValue={[colourOptions[0], colourOptions[1]]}
              isMulti
              options={alergicOptions}
              styles={customStyles}
              hideSelectedOptions={false}
              isSearchable={false}

            />
          </label>
        </div>
        <div className="ProductMiddle">
          <label>
            <span>Descrição</span>
            <input type="text" placeholder="Descrição" />
          </label>
        </div>
        <div className="ProductFinal">
          <label>
            <span>Ingredientes</span>
            <textarea />
          </label>
        </div>
        <Buttons>
          <button>Voltar</button>
          <button type="submit">Finalizar</button>
        </Buttons>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default ProductRegister;
