import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralElectricComponent } from './general-electric.component';

describe('GeneralElectricComponent', () => {
  let component: GeneralElectricComponent;
  let fixture: ComponentFixture<GeneralElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralElectricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
