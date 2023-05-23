import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/model/actor/Actor';

@Component({
  selector: 'app-actor-grid',
  templateUrl: './actor-grid.component.html',
  styleUrls: ['./actor-grid.component.css'],
})
export class ActorGridComponent {
  @Input() actors: Actor[]|undefined = [];
}
