import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionListInputBoxComponent } from './division-list-input-box.component';

describe('DivisionListInputBoxComponent', () => {
  let component: DivisionListInputBoxComponent;
  let fixture: ComponentFixture<DivisionListInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionListInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionListInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
