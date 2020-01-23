import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeInfoMaintenanceComponent } from './call-tree-info-maintenance.component';

describe('CallTreeInfoMaintenanceComponent', () => {
  let component: CallTreeInfoMaintenanceComponent;
  let fixture: ComponentFixture<CallTreeInfoMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeInfoMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeInfoMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
