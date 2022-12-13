import { TestBed } from '@angular/core/testing';

import { AnimateurGuard } from './animateur.guard';

describe('AnimateurGuard', () => {
  let guard: AnimateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnimateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
