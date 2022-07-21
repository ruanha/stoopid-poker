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
    return hands.filter(hand => this.handRank.rank(hand)[0] === maxRank);
  }

}
