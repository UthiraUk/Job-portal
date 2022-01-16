import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmpRegistrationComponent } from './components/emp-registration/emp-registration.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PostedjoblistComponent } from './components/postedjoblist/postedjoblist.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    EmployerComponent,
    EmpRegistrationComponent,
    EmpLoginComponent,
    EditprofileComponent,
    PostedjoblistComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    MatCardModule,FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
    
  ]
})
export class EmployerModule { }
