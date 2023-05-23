import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/model/actor/Actor';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css'],
})
export class ActorCardComponent {
  @Input() actor: Actor = new Actor();

  constructor(public validator:ValidatorService){}
}
