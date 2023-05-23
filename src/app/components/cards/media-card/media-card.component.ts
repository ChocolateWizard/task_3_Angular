import { Component, Input,OnInit } from '@angular/core';
import { Media } from 'src/app/model/media/Media';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
})
export class MediaCardComponent {


  public detailsPageUrl:string='';
  @Input() media: Media = new Media();

  constructor(){
    
  }

  ngOnInit(){
    switch(this.media.mediaType){
      case "movie":
        this.detailsPageUrl="/movie/"+this.media.id;
        break;
        case "show":
          this.detailsPageUrl="/show/"+this.media.id;
        break;
      default:
        this.detailsPageUrl="invalidUrl";
    }
  }

  
}
