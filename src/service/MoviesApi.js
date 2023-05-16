// const endPoint = 'https://api.themoviedb.org/3/search/movie?api_key=94b116ed3933ff35f0c1ab382d34626e&query=Jack+Reacher';
const apiKey = '94b116ed3933ff35f0c1ab382d34626e';
export const getMoviesBySearch = async (search) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`,
  );
  const movies = response.json();
  return movies;
};

export const getMovieById = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
  );
  const movie = response.json();
  return movie;
};

export const getTrailer = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    );
    const trailer = response.json();
    return trailer;
  } catch (error) {
    return null;
  }
};

export const getTrandingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`,
  );
  const movies = response.json();
  return movies;
};
