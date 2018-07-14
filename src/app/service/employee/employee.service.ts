
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

const employees: Employee[] = [
  {
    FirstName: 'John',
    LastName: 'Doe',
    EmployeeId: 1,
    PositionId: 1,
    EmployeeImage: '/assets/profile/person-flat/64x64.png'
  },
  {
    FirstName: 'Jane',
    LastName: 'Doe',
    EmployeeId: 2,
    PositionId: 2,
    EmployeeImage: '/assets/profile/person-girl-flat/64x64.png'
  },
  {
    FirstName: 'Jimmy',
    LastName: 'Olsen',
    EmployeeId: 3,
    PositionId: 3,
    EmployeeImage: '/assets/profile/person-flat/64x64.png'
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
