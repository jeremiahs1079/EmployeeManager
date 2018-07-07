import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddCardComponent } from './employee-add-card.component';

describe('EmployeeAddCardComponent', () => {
  let component: EmployeeAddCardComponent;
  let fixture: ComponentFixture<EmployeeAddCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
