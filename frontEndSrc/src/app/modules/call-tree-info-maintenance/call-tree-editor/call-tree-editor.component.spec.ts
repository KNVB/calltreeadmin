import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeEditorComponent } from './call-tree-editor.component';

describe('CallTreeEditorComponent', () => {
  let component: CallTreeEditorComponent;
  let fixture: ComponentFixture<CallTreeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
