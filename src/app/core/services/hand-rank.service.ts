import { Injectable } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { FlushService } from './flush.service';
import { KindService } from './kind.service';
import { StraightService } from './straight.service';

@Injectable({
  providedIn: 'root'
})
export class HandRankService {

  constructor(
    public straight: StraightService,
    public flush: FlushService,
    public kind: KindService
  ) { }

  rank(hand: Card[]) {
    const ranks = hand.map(card => card.rank);
    
    // straigth flush
    if (this.straight.isStraight(hand) && this.flush.isFlush(hand)) {
      return [8, Math.max(...ranks)]
    }

    // four of a kind
    if (this.kind.kind(4, ranks)) {
      return [7, this.kind.kind(4, ranks), this.kind.kind(1, ranks)]
    }

    // full house
    if (this.kind.kind(3, ranks) && this.kind.kind(2, ranks)) {
      return [6, this.kind.kind(3, ranks), this.kind.kind(2, ranks)]
    }

    // flush
    if (this.flush.isFlush(hand)) {
      return [5, this.sortDesc(ranks)]
    }

    // straight
    if (this.straight.isStraight(hand)) {
      return [4, Math.max(...ranks)]
    }

    // three of a kind
    if (this.kind.kind(3, ranks)) {
      return [3, this.kind.kind(3, ranks), this.sortDesc(ranks)]
    }

    // two pair
    // ToDo: fix this

    // One pair
    if (this.kind.kind(2, ranks)) {
      return [1, this.kind.kind(2, ranks), this.sortDesc(ranks)]
    }

    // highest card
    return [0, this.sortDesc(ranks)]
  }

  sortDesc(ranks: number[]): number[] {
    return ranks.sort((a, b)=> b-a)
  }
}
