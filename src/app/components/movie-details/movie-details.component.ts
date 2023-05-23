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




}
