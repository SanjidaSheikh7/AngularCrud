import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEmployeeInfoComponent } from './components/show-employee-info/show-employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employee/home', component: ShowEmployeeInfoComponent,title:'Home'},
  { path: 'employee/add', component: AddEmployeeComponent,title:'Add' },
  { path: '', redirectTo:'/home',pathMatch:'full' },
  {path:'employee/:id/update',component:UpdateEmployeeComponent ,title:'Update'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
