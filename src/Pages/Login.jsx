import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  state = {
    name: '',
  };

  handdleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { name } = this.state;
    const { history } = this.props;
    localStorage.setItem('user', JSON.stringify(name));
    history.push('/home');
  };

  render() {
    const min = 3;
    const { name } = this.state;
    return (
      <div className="login-container">
        <input
          type="text"
          value={ name }
          onChange={ this.handdleInput }
          name="name"
        />
        <button
          onClick={ this.handleLogin }
          disabled={ name.length < min }
          type="button"
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
