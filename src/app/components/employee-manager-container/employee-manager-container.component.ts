import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-manager-container',
  templateUrl: './employee-manager-container.component.html',
  styleUrls: ['./employee-manager-container.component.scss']
})
export class EmployeeManagerContainerComponent implements OnInit {

  myEmployees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.myEmployees = this.employeeService.getEmployees();
  }

}
