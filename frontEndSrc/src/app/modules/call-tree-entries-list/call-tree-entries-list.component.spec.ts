import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeEntriesListComponent } from './call-tree-entries-list.component';

describe('CallTreeEntriesListComponent', () => {
  let component: CallTreeEntriesListComponent;
  let fixture: ComponentFixture<CallTreeEntriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeEntriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeEntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
