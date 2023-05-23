import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scale',
})
export class ScalePipe implements PipeTransform {
  transform(value: number | undefined, by: number): number | undefined {
    if (value !== undefined) {
      return value * by;
    }
    return value;
  }
}
