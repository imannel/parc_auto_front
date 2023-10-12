import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteursComponent } from './conducteurs.component';

describe('ConducteursComponent', () => {
  let component: ConducteursComponent;
  let fixture: ComponentFixture<ConducteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConducteursComponent]
    });
    fixture = TestBed.createComponent(ConducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
