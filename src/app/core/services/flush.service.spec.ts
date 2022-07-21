import { TestBed } from '@angular/core/testing';
import Hand from '../models/hand.model';

import { FlushService } from './flush.service';
import hands from './test-data/hands.data'

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
    expect(service.isFlush(hands.flush)).toBeTruthy();
  });

  it('should return false if the cards are not a flush', () => {
    expect(service.isFlush(hands.four_of_a_kind)).toBeFalsy();
    expect(service.isFlush(hands.full_house)).toBeFalsy();
    expect(service.isFlush(hands.straight)).toBeFalsy();
    expect(service.isFlush(hands.three_of_a_kind)).toBeFalsy();
    expect(service.isFlush(hands.two_pair)).toBeFalsy();
    expect(service.isFlush(hands.one_pair)).toBeFalsy();
    expect(service.isFlush(hands.high_card)).toBeFalsy();
  });

});
