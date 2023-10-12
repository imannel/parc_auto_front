import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVoyageComponent } from './save-voyage.component';

describe('SaveVoyageComponent', () => {
  let component: SaveVoyageComponent;
  let fixture: ComponentFixture<SaveVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveVoyageComponent]
    });
    fixture = TestBed.createComponent(SaveVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
