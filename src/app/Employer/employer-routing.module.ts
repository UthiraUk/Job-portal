import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpRegistrationComponent } from './components/emp-registration/emp-registration.component';
import { EmployerComponent } from './employer.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PostedjoblistComponent } from './components/postedjoblist/postedjoblist.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
    { path: 'employer', component: EmployerComponent, children: [
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
        {path:'registration', component: EmpRegistrationComponent},
        {path:'login', component: EmpLoginComponent},
        {path:'dashboard',component:DashboardsComponent},
        {path:'Editprofile', component: EditprofileComponent},
        {path:'postjob',component:PostedjoblistComponent}
        
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
