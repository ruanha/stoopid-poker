import { Injectable } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { KindService } from './kind.service';

@Injectable({
  providedIn: 'root'
})
export class TwoPairService {

  constructor(
    public kind: KindService
  ) { }

  // if there are two of a kind, return the rank of each, otherwise return undefined
  twoPair(cards: Card[]): number[] | undefined {
    const ranks = cards.map(card => card.rank);
    const pair_1 = this.kind.kind(2, ranks);
    const pair_2 = this.kind.kind(2, ranks.filter(rank => rank !== pair_1));
    if (pair_1 && pair_2) {
      return [pair_1, pair_2];
    }
    return undefined;
  }
}
