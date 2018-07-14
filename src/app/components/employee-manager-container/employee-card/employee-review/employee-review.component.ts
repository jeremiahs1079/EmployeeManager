import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeePosition } from '../../../../models/employee-position.model';
import { EmployeePositionService } from 'src/app/service/position/employee-position.service';


@Component({
  selector: 'app-employee-review',
  templateUrl: './employee-review.component.html',
  styleUrls: ['./employee-review.component.scss']
})
export class EmployeeReviewComponent implements OnInit {

  @Input() myEmployee: Employee;
  @Input() allowInput: boolean;

  employeePositions: EmployeePosition [];

  constructor(
    private employeePositionService: EmployeePositionService
  ) {
  }

  ngOnInit() {
    this.employeePositions = this.employeePositionService.getEmployeePositions();
  }
}
