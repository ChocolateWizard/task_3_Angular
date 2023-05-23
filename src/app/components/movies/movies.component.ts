import { Component } from '@angular/core';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies:Media[];

  constructor(private dbService:DatabaseService){
    this.movies=dbService.getAllMovies();
  }

}
