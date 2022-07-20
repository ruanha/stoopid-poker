import { TestBed } from '@angular/core/testing';
import { Suit } from 'src/app/core/models/suit';

import { StraightService } from './straight.service';

describe('StraightService', () => {
  let service: StraightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StraightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if the cards are a straight', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.isStraight(cards)).toBeTruthy();
  });

  it('should return false if the cards are not a straight', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 7, suit: Suit.Clubs },
    ];
    expect(service.isStraight(cards)).toBeFalsy();
  });

  it('should return straight when suits are different', () => {
    const cards = [
      { rank: 9, suit: Suit.Hearts },
      { rank: 10, suit: Suit.Clubs },
      { rank: 11, suit: Suit.Spades },
      { rank: 12, suit: Suit.Diamonds },
      { rank: 13, suit: Suit.Clubs },
    ];
    expect(service.isStraight(cards)).toBeTruthy();
  });

});
