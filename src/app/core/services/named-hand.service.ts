import { Injectable } from '@angular/core';

import { Card } from '../models/card.model';
import { Score } from '../models/score.enum';
import { HandRankService } from './hand-rank.service';

@Injectable({
  providedIn: 'root'
})
export class NamedHandService {

  constructor(
    public handRankService: HandRankService
  ) { }

  name(hand: Card[]): string {
    const handRank = this.handRankService.rank(hand);

    let result = '';

    switch (handRank[0]) {
      case Score.straightFlush:
        result = "Straight flush!!!!!";
        break;
      case Score.fourOfAKind:
        result = "Four of a kind!!!!";
        break;
      case Score.fullHouse:
        result = "Full house!!!"
        break;
      case Score.flush:
        result = "Flush!!"
        break;
      case Score.straight:
        result = "Straight!"
        break;
      case Score.threeOfAKind:
        result = "Three of a kind."
        break;
      case Score.twoPair:
        result = "Two pair."
        break;
      case Score.onePair:
        result = "One pair."
        break;    
      default:
        result = "High card..."
        break;
    }
    return result;
  }
}
