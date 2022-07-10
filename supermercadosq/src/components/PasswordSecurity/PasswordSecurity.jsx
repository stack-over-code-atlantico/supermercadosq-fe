import React, { useState } from 'react';
import { PasswordSecurityContainer } from './styles';


const PasswordSecurityForm = () => {

  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [repeteNovaSenha, setRepeteNovaSenha] = useState("");

  return (
    <>
      <PasswordSecurityContainer>
        <h2 className="title">Editar senha</h2>
        <h3 className="subtitle">Edite sua senha</h3>
        <hr/>
        <form >
          <label>
            Senha antiga:
            <input type="password" value={senhaAntiga} onChange={e => setSenhaAntiga(e.target.value) } />
          </label>

          <label>
            Nova senha:
            <input type="password" value={novaSenha} onChange={e => setNovaSenha(e.target.value) } />
          </label>

          <label>
            Digite novamente a nova senha:
            <input type="password" value={repeteNovaSenha} onChange={e => setRepeteNovaSenha(e.target.value) } />
          </label>
          <div style={{ display: 'flex', marginLeft: '355px'}}>
           <input id="button" type="submit" value="Salvar" />
          </div>
        </form>
      </PasswordSecurityContainer>
    </>
  );
}


export default PasswordSecurityForm;
