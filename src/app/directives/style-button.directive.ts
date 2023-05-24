import { Directive, ElementRef, Input, HostBinding } from '@angular/core';
import { Media } from '../model/media/Media';
import { DatabaseService } from '../services/database.service';

@Directive({
  selector: '[appStyleButton]',
})
export class StyleButtonDirective {
  @Input() appStyleButton: Media | undefined;

  @HostBinding('class')
  get class() {
    if (this.isMediaInWatchlist()) {
      return 'flex items-center rounded font-semibold px-5 py-4  transition ease-in-out duration-150 bg-onyx-tint text-onyx-primary-10 hover:bg-onyx-primary-30';
    }
    return 'flex items-center rounded font-semibold px-5 py-4 transition ease-in-out duration-150 bg-mellon-primary text-onyx-tint hover:bg-mellon-shade';
  }

  constructor(private el: ElementRef, private dbService: DatabaseService) {}

  private isMediaInWatchlist() {
    if (this.appStyleButton !== undefined) {
      return this.dbService.isMediaInWatchlist(this.appStyleButton);
    }
    return false;
  }
}
