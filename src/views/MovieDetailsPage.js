import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Review/Reviews';
import routes from './routes';
import s from './MovieDetailsPage.module.css';
import ApiService from '../service/ApiService';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    original_title: null,
    original_name: null,
    poster_path: null,
    overview: null,
    genres: [],
    vote_average: null,
    id: '',
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    ApiService.fetchMovieDetails(movieId).then(response => {
      this.setState({ ...response.data });
    });
  }

  render() {
    const { location, history } = this.props;
    const { url, path } = this.props.match;

    return (
      <div className={s.card}>
        <button
          type="button"
          className={s.goBack}
          onClick={() => {
            console.log(location);
            if (location.state && location.state.from) {
              return history.push(location.state.from);
            }
            history.push(routes.movies);
          }}
        >
          Go back
        </button>
        <h2>
          {this.state.title ||
            this.state.original_title ||
            this.state.original_name}
        </h2>
        <img
          width="400"
          src={`https://image.tmdb.org/t/p/original${this.state.backdrop_path}`}
          alt=""
        />
        <p>
          <span className={s.main}>Vote average</span>:{' '}
          {this.state.vote_average}
        </p>
        <p>
          <span className={s.main}>Overview</span>: {this.state.overview}
        </p>

        <ul className={s.genres}>
          <span className={s.main}>Genres</span>:
          {this.state.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <div className={s.links}>
          <Link
            className={s.link}
            to={{
              pathname: `${url}/cast`,
              state: { from: location },
            }}
          >
            Cast
          </Link>

          <Link
            className={s.link}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location },
            }}
          >
            Reviews
          </Link>
        </div>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </div>
    );
  }
}

export default MovieDetailsPage;
