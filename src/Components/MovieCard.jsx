import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class MovieCard extends Component {
  addFavorites = () => {
    const { title, poster_path: poster, id } = this.props;
    const prevFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (prevFavorites.some((movie) => movie.id === id)) {
      const newFavorites = prevFavorites.filter((movie) => movie.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return;
    }
    const movie = { title, poster_path: poster, id };
    localStorage.setItem('favorites', JSON.stringify([...prevFavorites, movie]));
  };

  render() {
    const { title, poster_path: poster, id } = this.props;
    return (
      <div className="card">
        <Link to={ `/movie/${id}` }>
          <p>{title}</p>
          <img
            src={ `https://image.tmdb.org/t/p/w500${poster}` }
            alt="poster"
          />
        </Link>
        <form onSubmit={ this.addFavorites }>
          <button
            className="button"
            type="submit"
          >
            favoritos
          </button>
        </form>
      </div>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({}).isRequired;
