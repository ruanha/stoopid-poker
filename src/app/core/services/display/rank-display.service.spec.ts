import { TestBed } from '@angular/core/testing';

import { RankDisplayService } from './rank-display.service';

describe('RankDisplayService', () => {
  let service: RankDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
