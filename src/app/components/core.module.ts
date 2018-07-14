import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CoreRoutingModule } from './core-routing.module';
import { EmployeeManagerContainerComponent } from './employee-manager-container/employee-manager-container.component';
import { EmployeeCardComponent } from './employee-manager-container/employee-card/employee-card.component';
import { EmployeeAddCardComponent } from './employee-manager-container/employee-add-card/employee-add-card.component';
import { EmployeeReviewComponent } from './employee-manager-container/employee-card/employee-review/employee-review.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    EmployeeManagerContainerComponent,
    EmployeeCardComponent,
    EmployeeAddCardComponent,
    EmployeeReviewComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
