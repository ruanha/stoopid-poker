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
    // get rank of each hand
    const ranks = hands.map(hand => this.handRank.rank(hand));

    // return the highest rank(s)
    return hands.reduce((acc, curr) => {
      return this.compare(curr, acc);
    }, [hands[0]]);
  }

  compare(hand: Hand, winners: Hand[]) {
    const rank = this.handRank.rank(hand);
    const currentWinnerRank = this.handRank.rank(winners[0]);
    if (rank > currentWinnerRank) return [hand];
    if (rank < currentWinnerRank) return winners;
    return [hand, ...winners];
  }

}
