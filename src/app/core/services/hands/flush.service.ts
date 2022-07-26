import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class FlushService {

  constructor() { }

  isFlush = (cards: Card[]): boolean => {
    if (cards.length < 5 ) return false;
    return cards.map(card => card.suit).every(suit => suit === cards[0].suit);
  }
}
