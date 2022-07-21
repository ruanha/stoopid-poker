import { TestBed } from '@angular/core/testing';

import hands from './test-data/hands.data';
import { HandRankService } from './hand-rank.service';

describe('HandRankService', () => {
  let service: HandRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value for a flush', () => {
    expect(service.rank(hands['straight_flush'])).toEqual([8, 6]);
  });

  it('should return correct value for four of a kind', () => {
    expect(service.rank(hands['four_of_a_kind'])).toEqual([7, 4, 2]);
  });

  it('should return correct value for a full house', () => {
    expect(service.rank(hands['full_house'])).toEqual([6, 4, 2]);
  });

  it('should return correct value for a flush', () => {
    expect(service.rank(hands['flush'])).toEqual( [5, [7, 4, 4, 3, 2]]);
  });

  it('should return correct value for a straight', () => {
    expect(service.rank(hands['straight'])).toEqual([4, 6]);
  });

  it('should return correct value for three of a kind', () => {
    expect(service.rank(hands['three_of_a_kind'])).toEqual([3, 3, [6, 3, 3, 3, 2]]);
  });

  it('should return correct value for two pairs', () => {
    expect(service.rank(hands['two_pairs'])).toEqual([2, [2, 7]]);
  });

  it('should return correct value for a pair', () => {
    expect(service.rank(hands['one_pair'])).toEqual([1, 5, [5, 5, 4, 3, 2]]);
  });

  it('should return correct value for a high card', () => {
    expect(service.rank(hands['high_card'])).toEqual([0, [7, 5, 4, 3, 2]]);
  });

});
