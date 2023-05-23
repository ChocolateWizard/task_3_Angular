import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  public movie: Media | undefined;

  constructor(
    private dbService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private validator: ValidatorService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.validator.isNumber(id)) {
      const idNum = Number(id);
      this.movie = this.dbService.getMovie(idNum);
    } else {
      this.movie = undefined;
    }
  }

  isMovieDefined() {
    return this.movie !== undefined;
  }

  isMovieInWatchlist() {
    if (this.movie !== undefined) {
      return this.dbService.isMediaInWatchlist(this.movie);
    }
    return false;
  }
  getButtonClass() {
    if (this.isMovieInWatchlist()) {
      return 'flex items-center rounded font-semibold px-5 py-4  transition ease-in-out duration-150 bg-onyx-tint text-onyx-primary-10 hover:bg-onyx-primary-30';
    }
    return 'flex items-center rounded font-semibold px-5 py-4 transition ease-in-out duration-150 bg-mellon-primary text-onyx-tint hover:bg-mellon-shade';
  }

  buttonClicked() {
    if (this.movie !== undefined) {
      if (this.isMovieInWatchlist()) {
        //Movie is already in watchlist. REMOVE IT
        this.dbService.removeMediaFromWatchlist(this.movie);
      } else {
        //Movie isn't in watchlist. ADD IT
        this.dbService.addMediaToWatchlist(this.movie);
      }
    }
  }
}
