import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeEntryEditorComponent } from './call-tree-entry-editor.component';

describe('CallTreeEntryEditorComponent', () => {
  let component: CallTreeEntryEditorComponent;
  let fixture: ComponentFixture<CallTreeEntryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeEntryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
