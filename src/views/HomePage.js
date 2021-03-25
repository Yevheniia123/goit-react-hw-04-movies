import { Component } from 'react';
import MovieList from '../components/MovieList/MovieList';
import ApiService from '../service/ApiService';

class HomeView extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    ApiService.fetchHomePage().then(response =>
      this.setState({ movies: response.data.results }),
    );
  }

  render() {
    const { movies } = this.state;
    return <MovieList movies={movies} />;
  }
}

export default HomeView;
