import { TestBed } from '@angular/core/testing';

import { AuthenGuardGuard } from './authen-guard.guard';

describe('AuthenGuardGuard', () => {
  let guard: AuthenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
