import { Injectable } from '@angular/core';

import { Card } from 'src/app/core/models/card.model';
import { FlushService } from './hands/flush.service';
import { KindService } from './hands/kind.service';
import { StraightService } from './hands/straight.service';
import { Score } from '../models/score.enum';
import { TwoPairService } from './hands/two-pair.service';
import { CardRankService } from './card-rank.service';

@Injectable({
  providedIn: 'root'
})
export class HandRankService {

  constructor(
    public straight: StraightService,
    public flush: FlushService,
    public kind: KindService,
    public twoPair: TwoPairService,
    public cardRank: CardRankService
  ) { }

  rank(hand: Card[]) {
    const ranks = this.cardRank.rank(hand);
    
    // straigth flush
    if (this.straight.isStraight(ranks) && this.flush.isFlush(hand)) {
      return [Score.straightFlush, Math.max(...ranks)]
    }

    // four of a kind
    if (this.kind.kind(4, ranks)) {
      return [Score.fourOfAKind, this.kind.kind(4, ranks), this.kind.kind(1, ranks)]
    }

    // full house
    if (this.kind.kind(3, ranks) && this.kind.kind(2, ranks)) {
      return [Score.fullHouse, this.kind.kind(3, ranks), this.kind.kind(2, ranks)]
    }

    // flush
    if (this.flush.isFlush(hand)) {
      return [Score.flush, ranks];
    }

    // straight
    if (this.straight.isStraight(ranks)) {
      return [Score.straight, Math.max(...ranks)]
    }

    // three of a kind
    if (this.kind.kind(3, ranks)) {
      return [Score.threeOfAKind, this.kind.kind(3, ranks), this.sortDesc(ranks)]
    }

    // two pair
    if (this.twoPair.twoPair(ranks)) {
      return [Score.twoPair, this.twoPair.twoPair(ranks)]
    }

    // One pair
    if (this.kind.kind(2, ranks)) {
      return [Score.onePair, this.kind.kind(2, ranks), this.sortDesc(ranks)]
    }

    // highest card
    return [Score.highCard, this.sortDesc(ranks)]
  }

  sortDesc(ranks: number[]): number[] {
    return ranks.sort((a, b)=> b-a)
  }
}
