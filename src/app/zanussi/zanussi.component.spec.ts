import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanussiComponent } from './zanussi.component';

describe('ZanussiComponent', () => {
  let component: ZanussiComponent;
  let fixture: ComponentFixture<ZanussiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZanussiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanussiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
