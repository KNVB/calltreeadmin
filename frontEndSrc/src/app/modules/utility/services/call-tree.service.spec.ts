import { TestBed } from '@angular/core/testing';

import { CallTreeService } from './call-tree.service';

describe('CallTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallTreeService = TestBed.get(CallTreeService);
    expect(service).toBeTruthy();
  });
});
