import { Injectable } from '@angular/core';
import { Card } from '../../card';

@Injectable({
  providedIn: 'root'
})
export class StraightService {

  constructor() { }

  isStraight(cards: Card[]): boolean {
    const ranks = cards.map(card => card.rank);
    return ranks.every((rank, index) => {
      if (index === 0) {
        return true;
      }
      return rank === ranks[index - 1] + 1;
    });
  }
}
