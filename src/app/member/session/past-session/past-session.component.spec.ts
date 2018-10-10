import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSessionComponent } from './past-session.component';

describe('PastSessionComponent', () => {
  let component: PastSessionComponent;
  let fixture: ComponentFixture<PastSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
