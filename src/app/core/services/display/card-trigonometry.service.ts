import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTrigonometryService {

  constructor() { }

  getRotation(index: number, len: number): number {
    const relativePosition = index - Math.floor(len / 2);

    const theta = Math.atan( 111 / (172 - 150))
    return (180 - 90 - (theta * 180 / Math.PI)) * relativePosition;
  }

  getTranslation(index: number, len: number) {
    const relativePosition = index - Math.floor(len / 2);
    return relativePosition * (-150);
  }
}
