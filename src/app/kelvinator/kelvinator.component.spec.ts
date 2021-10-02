import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelvinatorComponent } from './kelvinator.component';

describe('KelvinatorComponent', () => {
  let component: KelvinatorComponent;
  let fixture: ComponentFixture<KelvinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelvinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelvinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
