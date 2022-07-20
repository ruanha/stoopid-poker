import { Injectable } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { Rank } from 'src/app/core/models/rank.enum';

@Injectable({
  providedIn: 'root'
})
export class KindService {

  constructor() { }

  kind = (n: number, ranks: number[]): number | undefined => 
    ranks.find(rank => ranks.filter(r => r === rank).length === n);
}
