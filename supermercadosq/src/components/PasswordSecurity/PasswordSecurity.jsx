import React from 'react';
import ProfileBar from '../../pages/Profile/Profile';
import { ProfileInformationContainer } from './styles';


export default class PasswordSecurityForm extends React.Component {
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
       <>
        <ProfileInformationContainer>
            <h2 className="title">Editar senha</h2>
            <h3 className="subtitle">Edite sua senha</h3>
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <label>
                Senha antiga:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                Nova senha:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                Digite novamente a nova senha:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input id="button" type="submit" value="Salvar" />
            </form>
          </ProfileInformationContainer>
       </>
    );
  }
}

