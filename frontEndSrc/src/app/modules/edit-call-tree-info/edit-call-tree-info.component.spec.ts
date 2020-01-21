import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCallTreeInfoComponent } from './edit-call-tree-info.component';

describe('EditCallTreeInfoComponent', () => {
  let component: EditCallTreeInfoComponent;
  let fixture: ComponentFixture<EditCallTreeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCallTreeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCallTreeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
