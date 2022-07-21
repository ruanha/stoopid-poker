import { Injectable } from '@angular/core';

import Hand from '../models/hand.model';
import { HandRankService } from './hand-rank.service';

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(
    public handRank: HandRankService,
  ) { }

  /**
   * @param hands - an array of hands
   * @returns an array of hands, containing only the hand(s) with the highest rank/scores
   */
  poker(hands: Hand[]) {
    let result = hands.slice(0, 1);
    for (let i = 1; i < hands.length; i++) {
      result = this.compare(hands[i], result);
    }
    return result;
  }

  compare(hand: Hand, winners: Hand[]) {
    const rank = this.handRank.rank(hand);
    const currentWinnerRank = this.handRank.rank(winners[0]);
    if (rank > currentWinnerRank) return [hand];
    if (rank < currentWinnerRank) return winners;
    return [hand, ...winners];
  }

}
