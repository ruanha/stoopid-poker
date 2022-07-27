import { Injectable } from '@angular/core';
import { Suit } from '../models/suit.enum';

@Injectable({
  providedIn: 'root'
})
export class SuitToStringService {

  constructor() { }

  getSuitDisplay(suit: Suit) {
    switch (suit) {
      case Suit.Clubs:
        return '♣';
      case Suit.Diamonds:
        return '♦';
      case Suit.Hearts:
        return '♥';
      case Suit.Spades:
        return '♠';
    }
  }

  getSuitName(suit: Suit) {
    switch (suit) {
      case Suit.Clubs:
        return 'clubs';
      case Suit.Diamonds:
        return 'diamonds';
      case Suit.Hearts:
        return 'hearts';
      case Suit.Spades:
        return 'spades';
    }
  }

}
