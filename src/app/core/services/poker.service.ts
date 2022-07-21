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
   * @returns an array of hands, containing only the hand(s) with the highest rank
   */
  poker(hands: Hand[]) {
    const ranks = hands.map(hand => this.handRank.rank(hand)) as any;
    let maxRank = 0;
    for (let rank of ranks) {
      if (rank[0] > maxRank) {
        maxRank = rank[0];
      }
    }

    const hands_with_max_rank = hands.filter(hand => this.handRank.rank(hand)[0] === maxRank);

    let winners: Hand[] = [];
    for (let hand of hands_with_max_rank) {
      if (winners.length === 0) {
        winners.push(hand);
      }
      else {
        winners = this.max(hand, winners);
      }
    }
    return winners;
  }

  max(hand: Hand, winners: Hand[]) {
    if (hand > winners[0]) return [hand];
    if (hand < winners[0]) return winners;
    return [hand, ...winners];
  }

}
