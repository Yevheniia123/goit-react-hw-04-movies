//import HomeView from './views/HomePage';
//import MoviesPage from './views/MoviesPage';
//import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import { Route, Switch } from 'react-router-dom';
import routes from './views/routes';
import AppBar from './components/AppBar/AppBar';
import { lazy, Suspense } from 'react';

const HomeView = lazy(() => import('./views/HomePage.js'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js'));
const MoviesPage = lazy(() => import('./views/MoviesPage.js'));

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h2>Load...</h2>}>
      <Switch>
        <Route path={routes.home} exact component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
