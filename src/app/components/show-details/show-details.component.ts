import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/model/media/Media';
import { DatabaseService } from 'src/app/services/database.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  public show: Media | undefined;

  constructor(
    private dbService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private validator: ValidatorService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.validator.isNumber(id)) {
      const idNum = Number(id);
      this.show = this.dbService.getShow(idNum);
    } else {
      this.show = undefined;
    }
  }
}
