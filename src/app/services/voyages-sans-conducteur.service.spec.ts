import { TestBed } from '@angular/core/testing';

import { VoyagesSansConducteurService } from './voyages-sans-conducteur.service';

describe('VoyagesSansConducteurService', () => {
  let service: VoyagesSansConducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyagesSansConducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
