import React, { useState } from "react";
import { ProfileInformationContainer, ContainerAvatar } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import { useEditUser } from "../../services/useUser";
import Select from "react-select";

const ProfileInformationForm = ({ data }) => {
  // const [restricaoAlimentar, setRestricaoAlimentar] = useState("");
  const [dataUser, setDataUser] = useState({
    cpfCnpj: "",
    nome: "",
    nomeSocial: "",
    email: "",
    telefone: "",
    restricaoAlimentar: "",
    cep: "",
    logradouro: "",
    numeroEndereco: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleEditUser(event) {
    event.preventDefault();
    useEditUser(
      dataUser.cpfCnpj,
      dataUser.nome,
      dataUser.nomeSocial,
      dataUser.email,
      dataUser.telefone,
      dataUser.restricaoAlimentar,
      dataUser.cep,
      dataUser.logradouro,
      dataUser.numeroEndereco,
      dataUser.bairro,
      dataUser.cidade,
      dataUser.estado
    );
  }
  const handleGetAlergic = (alergicOptions) => {
    setDataUser((prev) => ({
      ...prev,
      restricaoAlimentar: alergicOptions.map((alergia) => alergia.value).join(","),
    }));
    // console.log(dataUser.restricaoAlimentar);
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
    { value: "outros", label: "Outros" },
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

  const handleCep = () => {
    fetch(`https://viacep.com.br/ws/${dataUser.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setDataUser((prev) => ({ ...prev, logradouro: data.logradouro }))
        setDataUser((prev) => ({ ...prev, bairro: data.bairro }))
        setDataUser((prev) => ({ ...prev, cidade: data.localidade }))
        setDataUser((prev) => ({ ...prev, estado: data.uf }))
      });
  };

  useEffect(() => {
    setDataUser((prev) => ({
      ...prev,
      cpfCnpj: data.cpf_cnpj,
      nome: data.nome,
      nomeSocial: data.nome_social,
      email: data.email,
      telefone: data.telefone,
      restricaoAlimentar: data.restricao_alimenticia,
    }));
    // console.log(data);
    if (data.endereco) {
      const endereco = data.endereco[0];
      setDataUser((prev) => ({
        ...prev,
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        numeroEndereco: endereco.numero,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
      }));
    }
  }, [data]);

  useEffect(() => {
    handleCep();
  }, [dataUser.cep]);

  return (
    <>
      <ProfileInformationContainer>
        <h2 className="title">Editar perfil</h2>

        <form onSubmit={handleEditUser}>
          <ContainerAvatar>
            <label for="file">
              <BsFillPersonFill className="icon" size="5rem" />
              <input type="file" id="file" style={{ display: "none" }} />
            </label>
          </ContainerAvatar>

          <h3 className="subtitle">Dados pessoais</h3>
          <hr />

          <div className="align">
            <label>
              Nome Completo:
              <input
                type="text"
                value={dataUser.nome}
                onChange={(e) =>
                  setDataUser((prev) => ({ ...prev, nome: e.target.value }))
                }
              />
            </label>
            <label>
              Nome social:
              <input
                type="text"
                value={dataUser.nomeSocial}
                onChange={(e) =>
                  setDataUser((prev) => ({ ...prev, nomeSocial: e.target.value }))
                }
              />
            </label>
          </div>

          <label>
            E-mail:
            <input
              type="email"
              className="width"
              value={dataUser.email}
              onChange={(e) =>
                setDataUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="digite seu email"
            />
          </label>

          <div className="align">
            <label>
              Telefone:
              <input
                type="tel"
                className="less-width"
                value={dataUser.telefone}
                onChange={(e) =>
                  setDataUser((prev) => ({ ...prev, telefone: e.target.value }))
                }
                placeholder="digite seu telefone"
              />
            </label>

            <label>
              CPF/CNPJ:
              <input
                type="number"
                className="less-width"
                value={dataUser.cpfCnpj}
                disabled
              />
            </label>
          </div>

          <label>
            Restrição Alimentar
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
              placeholder={dataUser.restricaoAlimentar === null ? "Listar Alergia" : dataUser.restricaoAlimentar}
              // value={dataUser.restricaoAlimentar}
              onChange={handleGetAlergic}
            />
          </label>
          <h3 className="subtitle">Endereço</h3>
          <hr />

          <div className="align">
            <label>
              CEP:
              <input
                type="number"
                className="less-width"
                value={dataUser.cep}
                onChange={(e) =>
                  setDataUser((prev) => ({ ...prev, cep: e.target.value }))
                }
                min="0"
              />
            </label>

            <label>
              Logradouro:
              <input
                type="text"
                className="less-width"
                value={dataUser.logradouro}
                disabled={true}
                min="0"
              />
            </label>
          </div>

          <div id="adressNumber">
            <label>
              Número:
              <input
                type="text"
                className="less-width"
                value={dataUser.numeroEndereco}
                onChange={(e) =>
                  setDataUser((prev) => ({ ...prev, numeroEndereco: e.target.value }))
                }
                min="0"
              />
            </label>

            <label>
              Bairro:
              <input
                type="text"
                className="less-width"
                disabled={true}
                value={dataUser.bairro}
                min="0"
              />
            </label>
          </div>

          <div id="cityState">
            <label>
              Cidade:
              <input
                type="text"
                className="less-width"
                disabled={true}
                value={dataUser.cidade}
              />
            </label>

            <label>
              Estado:
              <input
                type="text"
                className="less-width"
                disabled={true}
                value={dataUser.estado}
              />
            </label>
          </div>
          <div>
            <input id="button" type="submit" value="Salvar" />
          </div>
        </form>
      </ProfileInformationContainer>
    </>
  );
};

export default ProfileInformationForm;
