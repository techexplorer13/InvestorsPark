import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmutualfundComponent } from './allmutualfund.component';

describe('AllmutualfundComponent', () => {
  let component: AllmutualfundComponent;
  let fixture: ComponentFixture<AllmutualfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmutualfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmutualfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
