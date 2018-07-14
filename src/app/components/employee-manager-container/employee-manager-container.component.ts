import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';


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
