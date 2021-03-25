import { Component } from 'react';
import s from './MoviePage.module.css';
import queryString from 'query-string';
import MovieList from '../components/MovieList/MovieList';
import ApiService from '../service/ApiService';

class MoviePage extends Component {
  state = {
    query: '',
    results: [],
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.search) {
      ApiService.fetchMoviePage(queryParams.search).then(response =>
        this.setState({ results: response.data.results }),
      );
    }
  }

  queryInput = e => {
    this.setState({ query: e.target.value });
  };

  buttonSubmit = e => {
    e.preventDefault();
    ApiService.fetchMoviePageButton(this.state.query).then(response =>
      this.setState({ results: response.data.results }),
    );

    this.props.history.push({
      search: `search=${this.state.query}`,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <form onSubmit={this.buttonSubmit} className={s.form}>
          <input
            type="text"
            value={query}
            onChange={this.queryInput}
            className={s.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button
            type="submit"
            onClick={this.buttonSubmit}
            className={s.formButton}
          >
            <span>Search</span>
          </button>
        </form>
        <MovieList movies={this.state.results} location={this.props.location} />
      </>
    );
  }
}

export default MoviePage;
