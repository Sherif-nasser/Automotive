import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhirlpoolComponent } from './whirlpool.component';

describe('WhirlpoolComponent', () => {
  let component: WhirlpoolComponent;
  let fixture: ComponentFixture<WhirlpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhirlpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhirlpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
