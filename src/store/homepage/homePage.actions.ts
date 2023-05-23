import { createAction, props } from '@ngrx/store';
import { Media } from 'src/app/model/media/Media';

export const fetchHomepageMovies = createAction('[HomePage] fetchHomepageMovies');
export const fetchHomepageMoviesSuccess = createAction(
  '[HomePage] fetchHomepageMoviesSuccess',
  props<{ movies: Media[] }>()
);
export const fetchHomepageMoviesFail = createAction(
  '[FetchHomepageMovies] fetchHomepageMoviesFail',
  props<{ error: any }>()
);
//---------------------------------------------------------------------------
export const fetchHomepageShows = createAction('[HomePage] fetchHomepageShows');
export const fetchHomepageShowsSuccess = createAction(
  '[HomePage] fetchHomepageShowsSuccess',
  props<{ shows: Media[] }>()
);
export const fetchHomepageShowsFail = createAction(
  '[HomePage] fetchHomepageShowsFail',
  props<{ error: any }>()
);
