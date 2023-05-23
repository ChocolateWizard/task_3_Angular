import { Media } from 'src/app/model/media/Media';

export interface MovieDetailsState {
  loadingMovie: boolean;
  movie: Media;
}
