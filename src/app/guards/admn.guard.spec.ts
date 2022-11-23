import { TestBed } from '@angular/core/testing';

import { AdmnGuard } from './admn.guard';

describe('AdmnGuard', () => {
  let guard: AdmnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmnGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
