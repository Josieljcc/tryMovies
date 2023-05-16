import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieById } from '../service/MoviesApi';

export default class MovieDetail extends Component {
  state = {
    movie: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const movie = await getMovieById(id);
    this.setState({ movie, isLoading: false });
  }

  render() {
    const { movie:
      { title, backdrop_path: background, overview }, isLoading } = this.state;

    if (isLoading) {
      return (<p>Loading...</p>);
    }
    return (
      <div className="movie-detail-container">
        <img src={ `https://image.tmdb.org/t/p/original/${background}` } alt="imagem de fundo" />
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    );
  }
}

MovieDetail.propTypes = PropTypes.shape({}).isRequired;
