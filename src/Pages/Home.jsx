import React, { Component } from 'react';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import { getMoviesBySearch, getTrandingMovies } from '../service/MoviesApi';
import MovieCard from '../Components/MovieCard';

export default class Home extends Component {
  state = {
    search: '',
    movies: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await getTrandingMovies();
    this.setState({ movies: response.results, isLoading: false });
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { search } = this.state;
    const response = await getMoviesBySearch(search);
    this.setState({ movies: response.results, isLoading: false });
  };

  render() {
    const { search, isLoading, movies } = this.state;
    if (isLoading) {
      return (<p>Carregando...</p>);
    }
    return (
      <>
        <Header
          search={ search }
          handleInput={ this.handleInput }
          handleSearch={ this.handleSearch }
        />
        <SideBar />
        <div className="movies-container">
          {movies.map((movie) => <MovieCard key={ movie.id } { ...movie } />)}
        </div>
      </>
    );
  }
}
