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
        <ProfileBar />
        <ProfileInformationContainer>
            <h3>Editar senha</h3>  
            <h4>Edite sua senha</h4>
            <form onSubmit={this.handleSubmit}>
              <label>
                senha antiga:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                nova senha:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>

              <label>
                digite novamente a nova senha:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Salvar" />
            </form>
          </ProfileInformationContainer>
       </>
    );
  }
}

