import { Component } from '@angular/core';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Media[];
  shows: Media[];

  constructor(private dbService:DatabaseService){
    this.movies=dbService.getAllMovies();
    this.shows=dbService.getAllShows();
  }

}
