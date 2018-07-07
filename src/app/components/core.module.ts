import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CoreRoutingModule } from './core-routing.module';
import { EmployeeManagerContainerComponent } from './employee-manager-container/employee-manager-container.component';
import { EmployeeCardComponent } from './employee-manager-container/employee-card/employee-card.component';
import { EmployeeAddCardComponent } from './employee-manager-container/employee-add-card/employee-add-card.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule
  ],
  declarations: [EmployeeManagerContainerComponent, EmployeeCardComponent, EmployeeAddCardComponent]
})
export class CoreModule { }
