import { TestBed } from '@angular/core/testing';
import Hand from '../../models/hand.model';

import { FlushService } from './flush.service';
import hands from './../test-data/hands.data'

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
    expect(service.isFlush(hands['flush'])).toBeTruthy();
  });

  it('should return false if the cards are not a flush', () => {
    for (let hand in hands) {
      if (hand !== 'flush' && hand !== 'straight_flush') {
        expect(service.isFlush(hands[hand])).toBeFalsy();
      }
    }
  });

  it('should return false for an empty list', () => {
    expect(service.isFlush([])).toBeFalse();
  });

});
