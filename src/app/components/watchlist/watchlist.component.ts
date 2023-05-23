import { Component } from '@angular/core';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  public watchlist: Media[];

  constructor(public dbService: DatabaseService) {
    this.watchlist = dbService.getWatchlist();
  }


  addMedia(){
    const m:Media=new Media();
    m.title="aaaa";
    this.dbService.addMediaToWatchlist(m);
  }
}
