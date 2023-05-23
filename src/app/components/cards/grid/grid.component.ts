import { Component, Input } from '@angular/core';
import { Media } from 'src/app/model/media/Media';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() media: Media[] = [];
}
