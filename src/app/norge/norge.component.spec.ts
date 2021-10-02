import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorgeComponent } from './norge.component';

describe('NorgeComponent', () => {
  let component: NorgeComponent;
  let fixture: ComponentFixture<NorgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
