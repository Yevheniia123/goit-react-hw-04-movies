import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../views/routes';
import s from '../../App.module.css';

const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to={routes.home}
              className={s.NavLink}
              activeClassName={s.NavLinkActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.movies}
              className={s.NavLink}
              activeClassName={s.NavLinkActive}
            >
              Movies
            </NavLink>
          </li>
          {/* <li>
        <NavLink to="/movies/:movieId">Moviedatails</NavLink>
      </li> */}
        </ul>
      </nav>
    </header>
  );
};
export default AppBar;
