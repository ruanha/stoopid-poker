import { Injectable } from '@angular/core';

import { Rank } from '../../models/rank.enum';

@Injectable({
  providedIn: 'root'
})
export class StraightService {

  constructor() { }

  isStraight(ranks: Rank[]): boolean {
    const s = new Set(ranks);
    return s.size === 5 && ranks[0] - ranks[4] === 4;
  }
}
