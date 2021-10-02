import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaewooComponent } from './daewoo.component';

describe('DaewooComponent', () => {
  let component: DaewooComponent;
  let fixture: ComponentFixture<DaewooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaewooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaewooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
