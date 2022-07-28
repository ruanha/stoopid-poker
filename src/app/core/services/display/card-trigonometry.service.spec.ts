import { TestBed } from '@angular/core/testing';

import { CardTrigonometryService } from './card-trigonometry.service';

describe('CardTrigonometryService', () => {
  let service: CardTrigonometryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTrigonometryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
