import React, { useState } from "react";
import { ProfileInformationContainer, ContainerAvatar } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import { useEditUser } from "../../services/useUser";
import Select from "react-select";

const ProfileInformationForm = ({ data }) => {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [retricaoAlimentar, setRestricaoAlimentar] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numeroEndereco, setNumeroEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  if (data.endereco) console.log(data.endereco[0]);

  function handleEditUser(event) {
    event.preventDefault();
    useEditUser(
      cpfCnpj,
      nome,
      nomeSocial,
      email,
      telefone,
      retricaoAlimentar,
      cep,
      logradouro,
      numeroEndereco,
      bairro,
      cidade,
      estado
    );
  }

  const handleGetAlergic = (alergicOptions) => {
    setRestricaoAlimentar((prev) => ({
      ...prev,
      alergia: alergicOptions.map((restricaoAlimentar) => alergia.value).join(","),
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
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      });
  };

  useEffect(() => {
    setNome(data.nome);
    setNomeSocial(data.nome_social);
    setEmail(data.email);
    setTelefone(data.telefone);
    setCpfCnpj(data.cpf_cnpj);
    setRestricaoAlimentar(data.restricao_alimenticia);
    if (data.endereco) {
      const endereco = data.endereco[0];
      setCep(endereco.cep);
      setLogradouro(endereco.logradouro);
      setNumeroEndereco(endereco.numero);
      setBairro(endereco.bairro);
      setCidade(endereco.cidade);
      setEstado(endereco.estado);
    }
  }, [data]);

  useEffect(() => {
    handleCep();
  }, [cep]);

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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label>
              Nome social:
              <input
                type="text"
                value={nomeSocial}
                onChange={(e) => setNomeSocial(e.target.value)}
              />
            </label>
          </div>

          <label>
            E-mail:
            <input
              type="email"
              className="width"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="digite seu email"
            />
          </label>

          <div className="align">
            <label>
              Telefone:
              <input
                type="tel"
                className="less-width"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="digite seu telefone"
              />
            </label>

            <label>
              CPF/CNPJ:
              <input
                type="number"
                className="less-width"
                value={cpfCnpj}
                onChange={(e) => setCpfCnpj(e.target.value)}
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
              placeholder="Listar alergias"
              // value={retricaoAlimentar}
              onChange={alergicOptions.map((restricaoAlimentar) => restricaoAlimentar.value).join(",")}
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
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                min="0"
              />
            </label>

            <label>
              Logradouro:
              <input
                type="text"
                className="less-width"
                value={logradouro}
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
                value={numeroEndereco}
                onChange={(e) => setNumeroEndereco(e.target.value)}
                min="0"
              />
            </label>

            <label>
              Bairro:
              <input
                type="text"
                className="less-width"
                disabled={true}
                value={bairro}
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
                value={cidade}
              />
            </label>

            <label>
              Estado:
              <input
                type="text"
                className="less-width"
                disabled={true}
                value={estado}
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
