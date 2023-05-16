import React, { Component } from 'react';
import MovieCard from '../Components/MovieCard';

export default class Favorites extends Component {
  state = {
    favorites: [],
  };

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({ favorites });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div>
        { favorites.map((movie) => (
          <MovieCard
            key={ movie.id }
            { ...movie }
          />
        )) }
      </div>
    );
  }
}
