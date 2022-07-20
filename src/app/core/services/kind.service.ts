import { Injectable } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { Rank } from 'src/app/core/models/rank';

@Injectable({
  providedIn: 'root'
})
export class KindService {

  constructor() { }

  kind(n: number, ranks: number[]): number | undefined {
    return ranks.find(rank => ranks.filter(r => r === rank).length === n);
  }
}
