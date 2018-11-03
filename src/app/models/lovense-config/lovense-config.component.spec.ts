import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovenseConfigComponent } from './lovense-config.component';

describe('LovenseConfigComponent', () => {
  let component: LovenseConfigComponent;
  let fixture: ComponentFixture<LovenseConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovenseConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovenseConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
