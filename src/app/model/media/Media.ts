import { Actor } from '../actor/Actor';

export class Media {
  id: number = -1;
  title: string = '';
  releaseDate: string = '';
  coverPath: string = '';
  rating: number = -1;
  description: string = '';
  numberOfSeasons: string = '';
  creatorsAsText: string = '';
  mediaType: string = '';
  directorsAsText: string = '';
  writersAsText: string = '';
  genresAsText: string = '';
  cast: Actor[] = [];
}
