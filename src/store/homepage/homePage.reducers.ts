import { createReducer, on } from '@ngrx/store';
import { HomePageState } from './HomePageState';
import { AppInitialState } from '../AppInitialState';
import {
  fetchHomepageMovies,
  fetchHomepageMoviesSuccess,
  fetchHomepageMoviesFail,
  fetchHomepageShows,
  fetchHomepageShowsSuccess,
  fetchHomepageShowsFail,
} from './homePage.actions';

const initialState: HomePageState = AppInitialState.homePage;

const reducer = createReducer(
  initialState,
  on(fetchHomepageMovies, (currentState) => {
    return {
      ...currentState,
      loadingMovies: true,
    };
  }),
  on(fetchHomepageMoviesSuccess, (currentState, action) => {
    return {
      ...currentState,
      loadingMovies: false,
      movies: action.movies,
      error: null,
    };
  }),
  on(fetchHomepageMoviesFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      loadingMovies: false,
      movies: [],
    };
  }),
  on(fetchHomepageShows, (currentState) => {
    return {
      ...currentState,
      loadingShows: true,
    };
  }),
  on(fetchHomepageShowsSuccess, (currentState, action) => {
    return {
      ...currentState,
      loadingShows: false,
      shows: action.shows,
      error: null,
    };
  }),
  on(fetchHomepageShowsFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      loadingShows: false,
      shows: [],
    };
  })
);

export function homePageReducer(state: HomePageState, action: any) {
  return reducer(state, action);
}
