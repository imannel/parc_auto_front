import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterConducteurComponent } from './affecter-conducteur.component';

describe('AffecterConducteurComponent', () => {
  let component: AffecterConducteurComponent;
  let fixture: ComponentFixture<AffecterConducteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterConducteurComponent]
    });
    fixture = TestBed.createComponent(AffecterConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
