import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() myEmployee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
