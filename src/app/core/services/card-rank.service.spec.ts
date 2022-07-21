import { TestBed } from '@angular/core/testing';
import { Suit } from '../models/suit.enum';

import { CardRankService } from './card-rank.service';

describe('CardRankService', () => {
  let service: CardRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of cards, sorted high to low', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 6, suit: Suit.Clubs },
      ];
      expect(service.cardRanks(cards)).toEqual([6, 5, 4, 3, 2]);
  });

  it('should return the list with ace as low, sorted high to low, when the cards are a straight with a low ace', () => {
    const cards = [
      { rank: 2, suit: Suit.Clubs },
      { rank: 3, suit: Suit.Clubs },
      { rank: 4, suit: Suit.Clubs },
      { rank: 5, suit: Suit.Clubs },
      { rank: 14, suit: Suit.Clubs },
      ];
      expect(service.cardRanks(cards)).toEqual([5, 4, 3, 2, 1]);
  });
});
