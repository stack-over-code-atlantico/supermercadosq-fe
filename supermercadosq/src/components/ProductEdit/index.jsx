import React, { useEffect } from "react";
import Select from "react-select";
import { BsCardImage } from "react-icons/bs";
import {
  Buttons,
  CloseButton,
  ImageUpload,
  RegisterContainer,
  RegisterForm,
  TitleDiv,
} from "./styles";
import { useState } from "react";
import { createOneProduct, editOneProduct } from "../../services/useProducts";

const ProductEdit = ({
  oldData,
  visibledUpdateProduct,
  handleVisibledUpdateProduct,
}) => {
  const [file, setFile] = useState(null);
  const [urlSrc, setUrlSrc] = useState(null);
  const [data, setData] = useState({
    nome: "",
    alergia: "",
    descricao: "",
    ingredientes: "",
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      nome: oldData.nome,
      alergia: oldData.alergia,
      descricao: oldData.descricao,
      ingredientes: oldData.ingredientes,
    }));
    setUrlSrc(oldData.imagem);
  }, [oldData]);
  const handleSelectFile = (event) => {
    setFile(event.target.files[0]);
    setUrlSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleEditProd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("alergia", data.alergia);
    formData.append("descricao", data.descricao);
    formData.append("ingredientes", data.ingredientes);
    formData.append("file", file);

    const submit = await editOneProduct(formData, oldData.id_produto)
      .then((res) => {
        alert("Produto Atualizado com Sucesso");
        window.location.reload();
      })
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
      cursor: "pointer",
      borderRadius: 8,
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
    <>
      {visibledUpdateProduct ? (
        <RegisterContainer>
          <ImageUpload>
            <label>
              {urlSrc ? (
                <img style={{ width: "45%" }} src={urlSrc} />
              ) : (
                <BsCardImage style={{ width: "500px", fontSize: "200%" }} />
              )}
              <input type="file" onChange={handleSelectFile} accept="image/*" />
            </label>
          </ImageUpload>
          <RegisterForm onSubmit={handleEditProd}>
            <TitleDiv className="titleDiv">
              <h2>Crie sua postagem sobre algum produto</h2>
              <CloseButton onClick={handleVisibledUpdateProduct}>X</CloseButton>
            </TitleDiv>
            <div className="ProductInitial">
              <label>
                <span>Nome</span>
                <input
                  type="text"
                  placeholder="Nome"
                  value={data.nome}
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
                  placeholder={data.alergia ? data.alergia : "Listar alergias"}
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
                  value={data.descricao}
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
                  value={data.ingredientes}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      ingredientes: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
            <Buttons>
              <button
                type="submit"
                disabled={
                  data.nome && data.descricao && data.ingredientes
                    ? false
                    : true
                }
              >
                Finalizar
              </button>
            </Buttons>
          </RegisterForm>
        </RegisterContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductEdit;
