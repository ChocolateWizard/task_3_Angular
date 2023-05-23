import { Media } from 'src/app/model/media/Media';
import { AppState } from './AppState';

//This defines the initial state of app. The one thats present at the begining
export const AppInitialState: AppState = {
  homePage: {
    loadingMovies: false,
    loadingShows: false,
    movies: [],
    shows: [],
    error:null
  },
  moviesPage: {
    loadingMovies: false,
    movies: [],
  },
  showsPage: {
    loadingShows: false,
    shows: [],
  },
  watchlist: {
    loadingMovies: false,
    loadingShows: false,
    movies: [],
    shows: [],
  },
  movieDetails: {
    loadingMovie: false,
    movie: new Media(),
  },
  showDetails: {
    loadingShow: false,
    show: new Media(),
  },
};
