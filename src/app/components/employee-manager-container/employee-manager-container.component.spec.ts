import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagerContainerComponent } from './employee-manager-container.component';

describe('EmployeeManagerContainerComponent', () => {
  let component: EmployeeManagerContainerComponent;
  let fixture: ComponentFixture<EmployeeManagerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManagerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
