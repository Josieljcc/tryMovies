import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { search, handleInput, handleSearch } = this.props;
    return (
      <div className="search-container">
        <input
          type="text"
          name="search"
          value={ search }
          onChange={ handleInput }
        />
        <button type="button" onClick={ handleSearch }>procurar</button>
      </div>
    );
  }
}

Search.propTypes = PropTypes.shape({}).isRequired;
