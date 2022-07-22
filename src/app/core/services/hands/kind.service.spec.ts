import { TestBed } from '@angular/core/testing';

import { KindService } from './kind.service';

describe('KindService', () => {
  let service: KindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined if there is no two of a kind', () => {
    const ranks = [2, 3, 4, 5, 6];
    expect(service.kind(2, ranks)).toBeUndefined();
  });

  it('should return undefined if there is no three of a kind', () => {
    const ranks = [3, 3, 4, 5, 6];
    expect(service.kind(3, ranks)).toBeUndefined();
  });

  it('should return undefined if there is no four of a kind', () => {
    const ranks = [3, 3, 3, 5, 6];
    expect(service.kind(4, ranks)).toBeUndefined();
  });

  it('should return the rank if there is two of a kind', () => {
    const ranks = [3, 3, 4, 5, 6];
    expect(service.kind(2, ranks)).toBe(3);
  });

  it('should return the rank if there is three of a kind', () => {
    const ranks = [1, 3, 6, 6, 6];
    expect(service.kind(3, ranks)).toBe(6);
  });

  it('should return the rank if there is four of a kind', () => {
    const ranks = [1, 6, 6, 6, 6];
    expect(service.kind(4, ranks)).toBe(6);
  });

  it('should return undefined if there is more than the requested of a kind', () => {
    const ranks = [1, 6, 6, 6, 6];
    expect(service.kind(3, ranks)).toBeUndefined();
  });

});
