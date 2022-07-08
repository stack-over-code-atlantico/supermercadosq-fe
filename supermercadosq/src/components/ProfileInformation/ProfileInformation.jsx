import React from 'react';
import ProfileBar from '../../pages/Profile/Profile';
import { ProfileInformationContainer, ProfileInformationDiv } from './styles';
import { BsFillPersonFill } from 'react-icons/bs'


export default class ProfileInformationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <ProfileInformationDiv>
        <ProfileInformationContainer>
          <h3>Editar perfil</h3>
          <BsFillPersonFill size="5%"/>
          <h4>Cliente</h4>

          <h4>dados pessoais</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nome:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Nome social:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              E-mail:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Telefone:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              CPF/CNPJ:
              <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Restrição Alimentar
              <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>


            <h4>endereço</h4>
            <label>
              CEP:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Logradouro:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Numero:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Bairro:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Cidade:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <label>
              Estado:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <input type="submit" value="Salvar" />
          </form>
        </ProfileInformationContainer>

      </ProfileInformationDiv>
    );
  }
}
