import { TestBed } from '@angular/core/testing';
import { Rank } from '../models/rank.enum';
import { Suit } from '../models/suit.enum';

import { DealService } from './deal.service';

describe('DealService', () => {
  let service: DealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain 52 unique cards when dealing from a single deck', () => {
    const cards = service.deal(1, 52)[0];
    expect(cards.length === 52);
    expect(cards.filter(card => cards.indexOf(card) === cards.lastIndexOf(card)).length === 52);
  });

  it('should throw error when requesting more cards than contained in the deck', () => {
    expect(() => service.deal(1, 53)).toThrowError('Cannot deal more cards than are in the deck');
  });

  it('should return an array with X empty array(s) when requesting X hands with 0 cards', () => {
    expect(service.deal(1, 0)).toEqual([[]]);
    expect(service.deal(2, 0)).toEqual([[], []]);
  });

  it('should return an empty array when requesting 0 hands with X cards', () => {
    expect(service.deal(0, 1)).toEqual([]);
    expect(service.deal(0, 2)).toEqual([]);
  });

  it('should return an array of randomly shuffled cards, each time it\'s called', () => {
    const cards_1 = service.deal(1, 52)[0];
    const cards_2 = service.deal(1, 52)[0];

    let sameOrder = true;
    for (let i = 0; i < cards_1.length; i++) {
      if (cards_1[i].rank !== cards_2[i].rank || cards_1[i].suit !== cards_2[i].suit) {
        sameOrder = false;
        break;
      }
    }
    expect(sameOrder).toBe(false); // Of course this cannot truly be guaranteed, but odds of it happening are astronomically low.
  });

});
