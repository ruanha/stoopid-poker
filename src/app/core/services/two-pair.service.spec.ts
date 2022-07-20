import { TestBed } from '@angular/core/testing';
import { Suit } from 'src/app/core/models/suit';

import { TwoPairService } from './two-pair.service';

describe('TwoPairService', () => {
  let service: TwoPairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoPairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if there is no two of a kind', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.twoPair(cards)).toBeUndefined();
  });

  it('should return each rank as tuple if there is two of a kind', () => {
    const cards = [
      { rank: 3, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.twoPair(cards)).toEqual([3, 6]);
  });

});
