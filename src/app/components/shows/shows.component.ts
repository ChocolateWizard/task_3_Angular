import { Component } from '@angular/core';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  shows: Media[];

  constructor(private dbService:DatabaseService){
    this.shows=dbService.getAllShows();
  }
}
