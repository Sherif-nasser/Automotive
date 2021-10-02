import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaArmComponent } from './technica-arm.component';

describe('TechnicaArmComponent', () => {
  let component: TechnicaArmComponent;
  let fixture: ComponentFixture<TechnicaArmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicaArmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
