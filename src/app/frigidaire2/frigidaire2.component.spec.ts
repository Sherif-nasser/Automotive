import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frigidaire2Component } from './frigidaire2.component';

describe('Frigidaire2Component', () => {
  let component: Frigidaire2Component;
  let fixture: ComponentFixture<Frigidaire2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frigidaire2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Frigidaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
