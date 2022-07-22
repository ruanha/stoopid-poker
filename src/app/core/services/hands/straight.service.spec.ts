import { TestBed } from '@angular/core/testing';
import { Suit } from 'src/app/core/models/suit.enum';

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
    const ranks = [6, 5, 4, 3, 2];
    expect(service.isStraight(ranks)).toBeTruthy();
  });

  it('should return true if it is a straight with a low ace', () => {
    const ranks = [5, 4, 3, 2, 1];
    expect(service.isStraight(ranks)).toBeTruthy();
  });

  it('should return false if the cards are not a straight', () => {
    const ranks = [7, 5, 4, 3, 2];
    expect(service.isStraight(ranks)).toBeFalsy();
  });

});
