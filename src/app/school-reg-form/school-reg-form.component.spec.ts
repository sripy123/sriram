import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRegFormComponent } from './school-reg-form.component';

describe('SchoolRegFormComponent', () => {
  let component: SchoolRegFormComponent;
  let fixture: ComponentFixture<SchoolRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
