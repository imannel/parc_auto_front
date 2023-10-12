import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesSansConducteurComponent } from './voyages-sans-conducteur.component';

describe('VoyagesSansConducteurComponent', () => {
  let component: VoyagesSansConducteurComponent;
  let fixture: ComponentFixture<VoyagesSansConducteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoyagesSansConducteurComponent]
    });
    fixture = TestBed.createComponent(VoyagesSansConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
