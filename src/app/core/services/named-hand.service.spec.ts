import { TestBed } from '@angular/core/testing';

import { NamedHandService } from './named-hand.service';

describe('NamedHandService', () => {
  let service: NamedHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamedHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
