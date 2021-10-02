import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceServicesComponent } from './maintainance-services.component';

describe('MaintainanceServicesComponent', () => {
  let component: MaintainanceServicesComponent;
  let fixture: ComponentFixture<MaintainanceServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainanceServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
