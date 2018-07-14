import { Injectable } from '@angular/core';
import { EmployeePosition } from 'src/app/models/employee-position.model';

const positions: EmployeePosition[] = [
  {
    PositionId: 1,
    PositionDescription: 'Software Developer'
  },
  {
    PositionId: 2,
    PositionDescription: 'Software Tester'
  },
  {
    PositionId: 3,
    PositionDescription: 'HR Manager'
  },
];

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {

  constructor() { }

  getEmployeePositions(): EmployeePosition[] {
    return positions;
  }

  getEmployeePosition(positionId: number) {
    const position = positions.filter((pos: EmployeePosition) => pos.PositionId === positionId);
    return position[0];
  }
}
