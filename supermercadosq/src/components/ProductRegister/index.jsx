import React, { useEffect } from "react";
import Select from "react-select";
import { BsPlusCircle } from "react-icons/bs";
import PostIcon from "../../assets/icons/post-icon.png";
import {
  Buttons,
  ImageUpload,
  RegisterContainer,
  RegisterForm,
} from "./styles";
import { useState } from "react";
import { createOneProduct } from "../../services/useProducts";

const ProductRegister = () => {
  const [file, setFile] = useState(null);
  const [srcUrl, setSrcUrl] = useState(PostIcon);
  const [data, setData] = useState({
    nome: "",
    alergia: "",
    descricao: "",
    ingredientes: "",
  });

  const handleSelectFile = (event) => {
    setFile(event.target.files[0]);
    setSrcUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleRegisterProd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("alergia", data.alergia);
    formData.append("descricao", data.descricao);
    formData.append("ingredientes", data.ingredientes);
    formData.append("file", file);

    const submit = await createOneProduct(formData)
      .then((res) => alert("Produto Cadastrado com Sucesso"))
      .catch((err) => alert("Ocorreu um Erro"));
    return submit;
  };

  const handleGetAlergic = (alergicOptions) => {
    setData((prev) => ({
      ...prev,
      alergia: alergicOptions.map((alergia) => alergia.value).join(","),
    }));
  };

  const alergicOptions = [
    { value: "amendoim", label: "Amendoim" },
    { value: "crustaceos", label: "Crustáceos" },
    { value: "gluten", label: "Glúten" },
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
        <label>
          <img width="50%" src={srcUrl}></img>
          <input type="file" onChange={handleSelectFile} accept="image/*" />
        </label>
      </ImageUpload>
      <RegisterForm onSubmit={handleRegisterProd}>
        <h2>Crie sua postagem sobre algum produto</h2>
        <div className="ProductInitial">
          <label>
            <span>Nome</span>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) =>
                setData((prev) => ({ ...prev, nome: e.target.value }))
              }
            />
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
              onChange={handleGetAlergic}
            />
          </label>
        </div>
        <div className="ProductMiddle">
          <label>
            <span>Descrição</span>
            <input
              type="text"
              placeholder="Descrição"
              onChange={(e) =>
                setData((prev) => ({ ...prev, descricao: e.target.value }))
              }
            />
          </label>
        </div>
        <div className="ProductFinal">
          <label>
            <span>Ingredientes</span>
            <textarea
              onChange={(e) =>
                setData((prev) => ({ ...prev, ingredientes: e.target.value }))
              }
            />
          </label>
        </div>
        <Buttons>
          <button type="button">Voltar</button>
          <button
            type="submit"
            disabled={
              data.nome && data.descricao && data.ingredientes ? false : true
            }
          >
            Finalizar
          </button>
        </Buttons>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default ProductRegister;
