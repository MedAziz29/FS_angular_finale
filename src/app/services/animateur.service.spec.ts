import { TestBed } from '@angular/core/testing';

import { AnimateurService } from './animateur.service';

describe('AnimateurService', () => {
  let service: AnimateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
