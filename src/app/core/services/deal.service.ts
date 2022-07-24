import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Rank } from '../models/rank.enum';
import { Suit } from '../models/suit.enum';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  deck: Card[] = []

  constructor() {

    (Object.values(Suit)).filter(suit => typeof suit === 'number').forEach(suit => {
      Object.values(Rank).filter(rank => typeof rank === 'number').forEach(rank => {
          this.deck.push({rank: rank as Rank, suit: suit as Suit});
      });
    });
  }

  deal(numHands: number, cards=5, deck=this.deck) {
    const hands = [];
    for (let i = 0; i < numHands; i++) {
      hands.push(deck.splice(0, cards));
    }
    return hands;
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
}
