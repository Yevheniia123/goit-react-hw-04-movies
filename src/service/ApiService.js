import axios from 'axios';

const fetchHomePage = () => {
  return axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=90996ae54f24edbe7886996fac12fc31',
  );
};

const fetchMovieDetails = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=90996ae54f24edbe7886996fac12fc31`,
  );
};

const fetchMoviePage = search => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=90996ae54f24edbe7886996fac12fc31&language=en-US&query=${search}`,
  );
};

const fetchMoviePageButton = stateQuery => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=90996ae54f24edbe7886996fac12fc31&language=en-US&query=${stateQuery}`,
  );
};

export default {
  fetchHomePage,
  fetchMovieDetails,
  fetchMoviePage,
  fetchMoviePageButton,
};
