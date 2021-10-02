import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiralComponent } from './admiral.component';

describe('AdmiralComponent', () => {
  let component: AdmiralComponent;
  let fixture: ComponentFixture<AdmiralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
