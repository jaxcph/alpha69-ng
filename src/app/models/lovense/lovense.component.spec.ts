import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovenseComponent } from './lovense.component';

describe('LovenseComponent', () => {
  let component: LovenseComponent;
  let fixture: ComponentFixture<LovenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
