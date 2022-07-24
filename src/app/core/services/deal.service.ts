import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Rank } from '../models/rank.enum';
import { Suit } from '../models/suit.enum';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  constructor() { }

  private getDecks(numDecks: number) {
    let deck: Card[] = [];
    for (let i = 0; i < numDecks; i++) {
      (Object.values(Suit)).filter(suit => typeof suit === 'number').forEach(suit => {
        Object.values(Rank).filter(rank => typeof rank === 'number').forEach(rank => {
            deck.push({rank: rank as Rank, suit: suit as Suit});
        });
      });
    }
    return deck;
  }

  deal(numHands: number, cards=5, deck=this.getDecks(1)) {
    if (numHands * cards > deck.length)
      throw new Error('Cannot deal more cards than are in the deck');

    const shuffledDeck = this.shuffle(deck);
      
    const hands = [];
    for (let i = 0; i < numHands; i++) {
      hands.push(shuffledDeck.splice(0, cards));
    }
    return hands;
  }

  private shuffle(deck: Card[]) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
}
