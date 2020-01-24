import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTreeInfoEditorComponent } from './call-tree-info-editor.component';

describe('CallTreeInfoEditorComponent', () => {
  let component: CallTreeInfoEditorComponent;
  let fixture: ComponentFixture<CallTreeInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTreeInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTreeInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
