import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';

const routes: Routes = [
  {path:'', component: EmployeesListComponent}
  //{ path: 'employees', component: EmployeesListComponent },
  //{ path: 'employees/new', component: EmployeeFormComponent },
  //{ path: 'employees/:id/edit', component: EmployeeFormComponent },
  //{ path: '', redirectTo: 'employees', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}