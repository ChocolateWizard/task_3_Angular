import { HomePageState } from './homepage/HomePageState';
import { MovieDetailsState } from './movieDetails/MovieDetailsState';
import { MoviesPageState } from './moviesPage/MoviesPageState';
import { ShowDetailsState } from './showDetails/ShowDetailsState';
import { ShowsPageState } from './showsPage/ShowsPageState';
import { WatchlistState } from './watchlist/WatchlistState';

export interface AppState {
  homePage: HomePageState;
  moviesPage: MoviesPageState;
  showsPage: ShowsPageState;
  watchlist: WatchlistState;
  movieDetails: MovieDetailsState;
  showDetails: ShowDetailsState;
}
