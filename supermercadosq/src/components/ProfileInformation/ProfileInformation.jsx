import React, { useState } from "react";
import { ProfileInformationContainer, ContainerAvatar } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import { useEditUser } from "../../services/useUser";
import Select from "react-select";
import { userLevel } from "../../services/useAuth";

const ProfileInformationForm = ({ data }) => {
  const [urlImg, setUrlImg] = useState(null);
  const [fileImg, setFileImg] = useState(null);
  const [dataUser, setDataUser] = useState({
    cpfCnpj: "",
    nome: "",
    nomeSocial: "",
    avatar: "",
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

  const handleEditUser = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nome", dataUser.nome);
    formData.append("nome_social", dataUser.nomeSocial);
    formData.append("file", fileImg);
    formData.append("email", dataUser.email);
    formData.append("telefone", dataUser.telefone);
    formData.append("restricao_alimenticia", dataUser.restricaoAlimentar);
    formData.append("cep", dataUser.cep);
    formData.append("logradouro", dataUser.logradouro);
    formData.append("numero", dataUser.numeroEndereco);
    formData.append("bairro", dataUser.bairro);
    formData.append("cidade", dataUser.cidade);
    formData.append("estado", dataUser.estado);

    const editedUser = await useEditUser(userLevel().cpf_cnpj, formData);
    return editedUser;
  };

  const getImgFile = (event) => {
    setFileImg(event.target.files[0]);
    setUrlImg(URL.createObjectURL(event.target.files[0]));
  };

  const handleGetAlergic = (alergicOptions) => {
    setDataUser((prev) => ({
      ...prev,
      restricaoAlimentar: alergicOptions
        .map((alergia) => alergia.value)
        .join(","),
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
    { value: "outros", label: "Outros" },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      padding: 10,
    }),
    control: (provided) => ({
      ...provided,
      width: "100%",
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
      paddingBottom: 6,
    }),
    valueContainer: (provided) => ({
      ...provided,
      maxWidth: "100%",
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
        setDataUser((prev) => ({ ...prev, logradouro: data.logradouro }));
        setDataUser((prev) => ({ ...prev, bairro: data.bairro }));
        setDataUser((prev) => ({ ...prev, cidade: data.localidade }));
        setDataUser((prev) => ({ ...prev, estado: data.uf }));
      });
  };

  useEffect(() => {
    setDataUser((prev) => ({
      ...prev,
      cpfCnpj: data.cpf_cnpj,
      nome: data.nome,
      nomeSocial: data.nome_social,
      avatar: data.avatar,
      email: data.email,
      telefone: data.telefone,
      restricaoAlimentar: data.restricao_alimenticia,
    }));

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
  console.log(dataUser);
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
              {dataUser.avatar || urlImg !== null ? (
                <img
                  src={urlImg ? urlImg : dataUser.avatar}
                  style={{
                    cursor: "pointer",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <BsFillPersonFill className="icon" size="6rem" />
              )}
              <input
                type="file"
                accept="image/*"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => getImgFile(e)}
              />
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
                  setDataUser((prev) => ({
                    ...prev,
                    nomeSocial: e.target.value,
                  }))
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
              placeholder={
                dataUser.restricaoAlimentar
                  ? dataUser.restricaoAlimentar
                  : "Listar Alergia"
              }
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
                  setDataUser((prev) => ({
                    ...prev,
                    numeroEndereco: e.target.value,
                  }))
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
