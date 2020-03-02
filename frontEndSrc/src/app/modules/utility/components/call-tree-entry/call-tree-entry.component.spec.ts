import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeEntryComponent } from './call-tree-entry.component';

describe('CallTreeEntryComponent', () => {
  let component: CallTreeEntryComponent;
  let fixture: ComponentFixture<CallTreeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
