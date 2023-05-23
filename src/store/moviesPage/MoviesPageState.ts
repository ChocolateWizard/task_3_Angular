import { Media } from 'src/app/model/media/Media';

export interface MoviesPageState {
  loadingMovies: boolean;
  movies: Media[];
}
