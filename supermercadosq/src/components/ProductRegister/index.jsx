import React from "react";
import Select from "react-select";
import { BsPlusCircle } from "react-icons/bs";
import {
  Buttons,
  ImageUpload,
  RegisterContainer,
  RegisterForm,
} from "./styles";

const ProductRegister = () => {
  const alergicOptions = [
    { value: "amendoim", label: "Amendoim" },
    { value: "crustáceos", label: "Crustáceos" },
    { value: "lactose", label: "Lactose" },
    { value: "mostarda", label: "Mostarda" },
    { value: "ovo", label: "Ovo" },
    { value: "peixe", label: "Peixe" },
    { value: "soja", label: "Soja" },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      padding: 10,
    }),
    control: (provided) => ({
      ...provided,
      width: 280,
      height: 40,
      border: "1.5px solid var(--color-blue-light)",
      borderRadius: 0,
      cursor: "pointer",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: 35,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: 200,
      fontSize: "13px",
      paddingTop: 6,
    }),
    valueContainer: (provided) => ({
      ...provided,
      maxWidth: "90%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "initial",
      fontWeight: 400,
      fontSize: "13px",
    }),
  };

  const multiValueContainer = ({ selectProps, data }) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex((selected) => selected.label === label);
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ", ";
    const val = `${label}${labelSuffix}`;
    return val;
  };

  const formatGroupLabel = (data) => (
    <div>
      <span>{data.label}</span>
      <span>{data.options.length}</span>
    </div>
  );

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
              options={alergicOptions}
              isMulti
              components={{
                MultiValueContainer: multiValueContainer,
              }}
              formatGroupLabel={formatGroupLabel}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              styles={customStyles}
              isSearchable={false}
              maxMenuWidth={100}
              placeholder="Listar alergias"
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
