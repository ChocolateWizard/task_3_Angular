import { Media } from 'src/app/model/media/Media';

export interface ShowsPageState {
  loadingShows: boolean;
  shows: Media[];
}
