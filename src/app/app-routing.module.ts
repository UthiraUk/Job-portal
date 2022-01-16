import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerComponent } from './Employer/employer.component';
import { SeekerComponent } from './seeker/seeker.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'employer', component:EmployerComponent},
  { path: 'seekers', component: SeekerComponent },
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
