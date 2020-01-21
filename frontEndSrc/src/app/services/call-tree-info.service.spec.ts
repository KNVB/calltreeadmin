import { TestBed } from '@angular/core/testing';

import { CallTreeInfoService } from './call-tree-info.service';

describe('CallTreeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallTreeInfoService = TestBed.get(CallTreeInfoService);
    expect(service).toBeTruthy();
  });
});
