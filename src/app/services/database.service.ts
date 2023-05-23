import { Injectable, OnInit } from '@angular/core';
import { Media } from '../model/media/Media';
import movies from 'src/assets/data/movies.json';
import shows from 'src/assets/data/shows.json';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private movies: Media[] = movies;
  private shows: Media[] = shows;
  private watchlist: Media[];

  constructor() {
    const a = localStorage.getItem('watchlist');
    this.watchlist = a != null ? JSON.parse(a) : [];
  }

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
  getWatchlist(): Media[] {
    return this.watchlist;
  }
  addMediaToWatchlist(media: Media) {
    const index = this.watchlist.findIndex((m) => {
      return m.mediaType === media.mediaType && m.id === media.id;
    });
    if (index === -1) {
      this.watchlist.push(media);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
    }
  }
  removeMediaFromWatchlist(media: Media) {
    const index = this.watchlist.findIndex((m) => {
      return m.mediaType === media.mediaType && m.id === media.id;
    });
    if (index !== -1) {
      this.watchlist.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
    }
  }
  isMediaInWatchlist(media: Media): boolean {
    const index = this.watchlist.findIndex((m) => {
      return m.mediaType === media.mediaType && m.id === media.id;
    });
    return index !== -1;
  }
}
