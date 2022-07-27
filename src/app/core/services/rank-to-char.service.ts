import { Injectable } from '@angular/core';
import { Rank } from '../models/rank.enum';

@Injectable({
  providedIn: 'root'
})
export class RankToCharService {

  constructor() { }

  transformRank(rank: Rank) {
    if (rank === Rank.Ace) {
      return 'A';
    }
    if (rank === Rank.King) {
      return 'K';
    }
    if (rank === Rank.Queen) {
      return 'Q';
    }
    if (rank === Rank.Jack) {
      return 'J';
    }
    return rank;
  }

  transformRanks(ranks: Rank[]) {
    return ranks.map(rank => this.transformRank(rank));
  }
}
