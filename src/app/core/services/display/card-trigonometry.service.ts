import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTrigonometryService {

  constructor() { }

  /** Uses the formula for calculating the angle of a right-angled triangle to calculate the angle of the card. 
   * Then applies the relative position, so cards further away from the center are angled more.
  */
  getRotation(index: number, len: number): number {
    const relativePosition = index - Math.floor(len / 2);

    const theta = Math.atan( 111 / (172 - 150)); // hardcoded for now: 111px is half the height of the card. 172px is half the width of the card and 150px is the distance translated (see getTranslation).
    return (180 - 90 - (theta * 180 / Math.PI)) * relativePosition;
  }

  /**
   * Move the cards towards the center of the hand so they overlap.
   */
  getTranslation(index: number, len: number) {
    const relativePosition = index - Math.floor(len / 2);
    return relativePosition * (15); // hardcoded for now. The cards are ~ 175px wide, this makes them overlap nicely.
  }
}
