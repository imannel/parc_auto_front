import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteursDisponiblesComponent } from './conducteurs-disponibles.component';

describe('ConducteursDisponiblesComponent', () => {
  let component: ConducteursDisponiblesComponent;
  let fixture: ComponentFixture<ConducteursDisponiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConducteursDisponiblesComponent]
    });
    fixture = TestBed.createComponent(ConducteursDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
