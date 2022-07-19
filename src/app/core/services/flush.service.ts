import { Injectable } from '@angular/core';
import { Card } from '../../card';

@Injectable({
  providedIn: 'root'
})
export class FlushService {

  constructor() { }

  isFlush(cards: Card[]): boolean {
    const suits = cards.map(card => card.suit);
    return suits.every(suit => suit === suits[0]);
  }
}
