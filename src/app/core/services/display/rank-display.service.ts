import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankDisplayService {

  constructor() { }

  getRankDisplay(rank: number) {
    let col1 = 0;
    let col2 = 0;
    let col3 = 0;

    if (rank < 4) {
      col2 = rank;
    }
    if ((rank > 3 && rank < 8) || rank === 9) {
      col2 = rank % 2;
      col1 = col3 = (rank - col2) / 2;
    }
    if (rank === 8) {
      col1 = col3 = 3;
      col2 = 2;
    }
    if (rank === 10) {
      col1 = col3 = 4;
      col2 = 2;
    }
    return [ col1, col2, col3 ];
  }
}
