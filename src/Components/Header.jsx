import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

export default class Header extends Component {
  state = {
    userName: '',
  };

  componentDidMount() {
    this.setState({ userName: JSON.parse(localStorage.getItem('user')) });
  }

  render() {
    const { userName } = this.state;
    return (
      <header>
        <p>{userName}</p>
        <Search { ...this.props } />
      </header>
    );
  }
}

Header.propTypes = PropTypes.shape({}).isRequired;
