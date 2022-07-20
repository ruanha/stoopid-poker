import { TestBed } from '@angular/core/testing';
import { Suit } from 'src/app/core/models/suit';

import { FlushService } from './flush.service';

describe('FlushService', () => {
  let service: FlushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if the cards are a flush', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.isFlush(cards)).toBeTruthy();
  });

  it('should return false if the cards are not a flush', () => {
    const cards = [
      { rank: 2, suit: Suit.Diamonds },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
    ];
    expect(service.isFlush(cards)).toBeFalsy();
  });
  
});
