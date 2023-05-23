import { Injectable } from '@angular/core';
import { Media } from '../model/media/Media';
import movies from 'src/assets/data/movies.json';
import shows from 'src/assets/data/shows.json';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private movies: Media[] = movies;
  private shows: Media[] = shows;

  constructor() {}

  getAllMovies(): Media[] {
    return this.movies;
  }
  getAllShows(): Media[] {
    return this.shows;
  }
  getAllMedia(): Media[] {
    return this.movies.concat(this.shows);
  }
  getMovie(id: number | null): Media | undefined {
    if (id == null) return undefined;
    return this.movies.find((movie) => movie.id === id);
  }
  getShow(id: number | null): Media | undefined {
    if (id == null) return undefined;
    return this.shows.find((show) => show.id === id);
  }
}
