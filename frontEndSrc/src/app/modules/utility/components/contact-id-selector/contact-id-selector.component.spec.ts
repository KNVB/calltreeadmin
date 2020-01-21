import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIdSelectorComponent } from './contact-id-selector.component';

describe('ContactIdSelectorComponent', () => {
  let component: ContactIdSelectorComponent;
  let fixture: ComponentFixture<ContactIdSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIdSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
