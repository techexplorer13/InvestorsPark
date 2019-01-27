import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundNamesComponent } from './mutual-fund-names.component';

describe('MutualFundNamesComponent', () => {
  let component: MutualFundNamesComponent;
  let fixture: ComponentFixture<MutualFundNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
