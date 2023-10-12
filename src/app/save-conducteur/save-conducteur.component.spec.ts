import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConducteurComponent } from './save-conducteur.component';

describe('SaveConducteurComponent', () => {
  let component: SaveConducteurComponent;
  let fixture: ComponentFixture<SaveConducteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveConducteurComponent]
    });
    fixture = TestBed.createComponent(SaveConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
