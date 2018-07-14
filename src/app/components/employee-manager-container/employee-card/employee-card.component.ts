import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';


@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() myEmployee: Employee;

  allowInput: boolean;

  constructor(
    private employeeService: EmployeeService
  ) {
    this.allowInput = true;
  }

  ngOnInit() {
  }

  toggleAllowInput() {
    this.allowInput = !this.allowInput;
  }

  removeEmployee(employee: Employee) {
    this.employeeService.removeEmployee(employee);
  }

}
