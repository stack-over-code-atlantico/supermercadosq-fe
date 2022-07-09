import React, { useState } from "react";
import { ProfileInformationContainer, ContainerAvatar } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";

const ProfileInformationForm = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [retricaoAlimentar, setRestricaoAlimentar] = useState("");

  return (
    <>
      <ProfileInformationContainer>
        <h2 className="title">Editar perfil</h2>

        <form>
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
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
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
            <input
              type="select"
              className="width"
              value={retricaoAlimentar}
              onChange={(e) => setRestricaoAlimentar(e.target.value)}
            />
          </label>

          <h3 className="subtitle">Endereço</h3>
          <hr />

          <div className="align">
            <label>
              CEP:
              <input type="number" className="less-width" min="0" />
            </label>

            <label>
              Logradouro:
              <input type="text" className="less-width" min="0" />
            </label>
          </div>

          <div id="adressNumber">
            <label>
              Número:
              <input type="text" className="less-width" min="0" />
            </label>

            <label>
              Bairro:
              <input type="text" className="less-width" min="0" />
            </label>
          </div>

          <div id="cityState">
            <label>
              Cidade:
              <input type="text" className="less-width" />
            </label>

            <label>
              Estado:
              <input type="text" className="less-width" />
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
