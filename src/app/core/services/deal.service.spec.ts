import { TestBed } from '@angular/core/testing';
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

  it('should create a deck of cards', () => {
    console.log(Object.values(Suit));
    const deck = service.deal(4, 13);
    console.log(deck[0][0])
    expect(deck.length).toBe(4);
    for (let i = 0; i < 4; i++) {
      expect(deck[i].length).toBe(13);
    }
    expect(deck[0][0].rank).toBe(2);
    expect(deck[0][0].suit).toBe(Suit.Clubs);
  });

});
