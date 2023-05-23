import { Media } from 'src/app/model/media/Media';

export interface WatchlistState {
  loadingMovies: boolean;
  loadingShows: boolean;
  movies: Media[];
  shows: Media[];
}
