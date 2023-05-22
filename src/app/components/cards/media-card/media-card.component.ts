import { Component, Input } from '@angular/core';
import { Media } from 'src/app/model/media/Media';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
})
export class MediaCardComponent {
  @Input() media: Media = new Media();
}
