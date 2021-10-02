import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestinghouseComponent } from './westinghouse.component';

describe('WestinghouseComponent', () => {
  let component: WestinghouseComponent;
  let fixture: ComponentFixture<WestinghouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestinghouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestinghouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
