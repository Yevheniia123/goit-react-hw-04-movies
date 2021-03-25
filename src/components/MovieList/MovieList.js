import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.listItem}>
          <Link
            className={s.listLink}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview
              img={movie.poster_path}
              title={movie.title || movie.original_title || movie.original_name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MovieList);
