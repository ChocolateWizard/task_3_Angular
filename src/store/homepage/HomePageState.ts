import { Media } from 'src/app/model/media/Media';

export interface HomePageState {
  loadingMovies: boolean;
  loadingShows: boolean;
  movies: Media[];
  shows: Media[];
  error:null;
}
