import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  isNumber(text: string | null) {
    if (text == null) return false;
    return !isNaN(Number(text));
  }
  isEmptyOrSpaces(str: string | null | undefined) {
    return str == null || str.match(/^\s*$/) !== null;
  }
}
