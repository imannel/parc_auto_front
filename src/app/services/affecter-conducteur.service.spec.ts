import { TestBed } from '@angular/core/testing';

import { AffecterConducteurService } from './affecter-conducteur.service';

describe('AffecterConducteurService', () => {
  let service: AffecterConducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffecterConducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
