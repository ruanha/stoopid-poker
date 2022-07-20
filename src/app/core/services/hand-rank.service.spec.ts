import { TestBed } from '@angular/core/testing';
import { Suit } from 'src/app/core/models/suit';

import { HandRankService } from './hand-rank.service';

describe('HandRankService', () => {
  let service: HandRankService;
  let sf = [
    { rank: 2, suit: Suit.Clubs },
    { rank: 3, suit: Suit.Clubs },
    { rank: 4, suit: Suit.Clubs },
    { rank: 5, suit: Suit.Clubs },
    { rank: 6, suit: Suit.Clubs },
  ]; // straight flush
  let fk = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Diamonds },
    { rank: 4, suit: Suit.Spades },
    { rank: 4, suit: Suit.Clubs },
    { rank: 4, suit: Suit.Clubs },
  ] // four of a kind
  const fh = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Diamonds },
    { rank: 4, suit: Suit.Spades },
    { rank: 4, suit: Suit.Clubs },
    { rank: 2, suit: Suit.Clubs },
  ]; // full house
  const f = [
    { rank: 2, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
  ]; // flush
  const s = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 6, suit: Suit.Hearts },
  ]; // straight
  const tk = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 6, suit: Suit.Hearts },
  ] // three of a kind
  const tp = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
    { rank: 3, suit: Suit.Hearts },
  ] // two pair
  const op = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
  ]
  const hc = [
    { rank: 2, suit: Suit.Diamonds },
    { rank: 3, suit: Suit.Hearts },
    { rank: 4, suit: Suit.Hearts },
    { rank: 5, suit: Suit.Hearts },
    { rank: 7, suit: Suit.Hearts },
  ] // highest card

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value for a flush', () => {
    expect(service.rank(sf)).toEqual([8, 6]);
  });

  it('should return correct value for four of a kind', () => {
    expect(service.rank(fk)).toEqual([7, 4, 2]);
  });

  it('should return correct value for a full house', () => {
    expect(service.rank(fh)).toEqual([6, 4, 2]);
  });

  it('should return correct value for a flush', () => {
    expect(service.rank(f)).toEqual( [5, [7, 4, 4, 3, 2]]);
  });

  it('should return correct value for a straight', () => {
    expect(service.rank(s)).toEqual([4, 6]);
  });

  it('should return correct value for three of a kind', () => {
    expect(service.rank(tk)).toEqual([3, 3, [6, 3, 3, 3, 2]]);
  });

  // test for two pairs when done

  it('should return correct value for a pair', () => {
    expect(service.rank(op)).toEqual([1, 5, [5, 5, 4, 3, 2]]);
  });

  it('should return correct value for a high card', () => {
    expect(service.rank(hc)).toEqual([0, [7, 5, 4, 3, 2]]);
  });

});
