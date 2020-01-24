import { TestBed } from '@angular/core/testing';

import { CallTreeEntryService } from './call-tree-entry.service';

describe('CallTreeEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallTreeEntryService = TestBed.get(CallTreeEntryService);
    expect(service).toBeTruthy();
  });
});
