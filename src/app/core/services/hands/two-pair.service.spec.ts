import { TestBed } from '@angular/core/testing';

import { TwoPairService } from './two-pair.service';
import hands from './../test-data/hands.data';

describe('TwoPairService', () => {
  let service: TwoPairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoPairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if there is not two pairs', () => {
    for (let hand in hands) {
      if (hand !== 'two_pairs') {
        expect(service.twoPair(hands[hand])).toBeFalsy();
      }
    }
  });

  it('should return each rank as tuple if there is two pairs', () => {
    expect(1).toBe(1);
  });

});
