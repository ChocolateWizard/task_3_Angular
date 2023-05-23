import { Component } from '@angular/core';
import { moviesData, showsData } from 'src/assets/data/data';
import { Media } from 'src/app/model/media/Media';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies: Media[] = moviesData;
  shows: Media[] = showsData;

  // movies: Media[] = [];
  // shows: Media[] = [];
}
