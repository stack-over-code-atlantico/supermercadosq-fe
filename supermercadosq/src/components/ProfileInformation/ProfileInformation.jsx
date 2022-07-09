import React, { useState } from 'react';
import { ProfileInformationContainer } from './styles';
import { BsFillPersonFill } from 'react-icons/bs'


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

        <BsFillPersonFill 
          size="15%" 
          style={{
            background: "var(--color-blue-light)",
            color: "var(--color-white)",
            borderRadius:"50%",
            marginLeft: '40%',
            }}/>
        <h3 className="title-icon">Cliente</h3>
        
        <h3 className="subtitle">Dados pessoais</h3>
        <hr/>

        <form >
          <div className="align">
            <label>
              Nome Completo:
              <input 
                type="text" 
                className="less-width"
                value={nomeCompleto} 
                onChange={e => setNomeCompleto(e.target.value) }
              />
            </label>
          
            <label>
              Nome social:
              <input 
                type="text" 
                className="less-width"
                value={nomeSocial} 
                onChange={e => setNomeSocial(e.target.value) } 
              />
            </label>
          </div>
          
        
          <label>
            E-mail:
            <input 
              type="email" 
              className="width"
              value={email} 
              onChange={e => setEmail(e.target.value) } 
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
                onChange={e => setTelefone(e.target.value) }
                placeholder="digite seu telefone" 
              />
            </label>
          
            <label>
              CPF/CNPJ:
              <input 
                type="number" 
                className="less-width"
                value={cpfCnpj} 
                onChange={e => setCpfCnpj(e.target.value) } 
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
              onChange={e => setRestricaoAlimentar(e.target.value) } 
            />
          </label>
        
        
          <h3 className="subtitle">Endereço</h3>
          <hr/>
            
          <div className="align">
            <label>
              CEP:
              <input 
                type="number" 
                className="less-width" 
                min="0"
              />
            </label>
                              
            <label>
              Logradouro:
              <input 
                type="text" 
                className="less-width" 
                min="0"
              />
            </label>
          </div>

          <div id="adressNumber" className="align">              
            <label>
              Número:
              <input 
                type="text" 
                className="less-width"
                min="0"
              />
            </label>

            <label>
              Bairro:
              <input 
                type="text" 
                className="less-width"
                min="0" 
              />
            </label>     
          </div>

          <div id="cityState" className="align">
            <label>
              Cidade:
              <input 
                type="text"
                className="less-width" 
              />
            </label>
                      
            <label>
              Estado:
              <input 
                type="text" 
                className="less-width"
              />
            </label>
          </div>
         
          <input id="button"type="submit" value="Salvar" />
        </form>
        
      </ProfileInformationContainer>
    </>
  );
}

export default ProfileInformationForm;