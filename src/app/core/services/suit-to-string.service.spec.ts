import { TestBed } from '@angular/core/testing';

import { SuitToStringService } from './suit-to-string.service';

describe('SuitToStringService', () => {
  let service: SuitToStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuitToStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
