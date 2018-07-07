import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

const employees: Employee[] = [
  {
    FirstName: 'John',
    LastName: 'Doe',
    EmployeeId: 1,
    PositionId: 1,
    EmployeeImage: ''
  },
  {
    FirstName: 'Jane',
    LastName: 'Doe',
    EmployeeId: 2,
    PositionId: 1,
    EmployeeImage: ''
  },
  {
    FirstName: 'Jimmy',
    LastName: 'Olsen',
    EmployeeId: 3,
    PositionId: 1,
    EmployeeImage: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return employees;
  }

  getEmployee(employeeId: number): Employee {
    const employee = employees.filter((e: Employee) => e.EmployeeId === employeeId);
    return employee[0];
  }

  addEmployee(employee: Employee) {
    employees.push(employee);
  }

  removeEmployee(employee: Employee) {
    const employeeToRemove = employees.indexOf(employee);
    if (employeeToRemove > -1) {
      employees.splice(employeeToRemove, 1);
    }
  }
}
