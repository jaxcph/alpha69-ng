import { TestBed } from '@angular/core/testing';

import { LovenseService } from './lovense.service';

describe('LovenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LovenseService = TestBed.get(LovenseService);
    expect(service).toBeTruthy();
  });
});
