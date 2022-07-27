import { TestBed } from '@angular/core/testing';

import { RankToCharService } from './rank-to-char.service';

describe('RankToCharService', () => {
  let service: RankToCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankToCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
