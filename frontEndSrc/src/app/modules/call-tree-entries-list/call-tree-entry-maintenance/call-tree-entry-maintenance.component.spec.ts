import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeEntryMaintenanceComponent } from './call-tree-entry-maintenance.component';

describe('CallTreeEntryMaintenanceComponent', () => {
  let component: CallTreeEntryMaintenanceComponent;
  let fixture: ComponentFixture<CallTreeEntryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeEntryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeEntryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
