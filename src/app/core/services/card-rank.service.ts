import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardRankService {

  constructor() { }

  cardRanks = (hand: Card[]) => {
    const ranks = hand.map(card => card.rank);
    ranks.sort((a, b) => b - a);
    return ranks.toString() === '14,5,4,3,2' ? [5, 4, 3, 2, 1] : ranks;
  }
}
