import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddEmpComponent } from './home/add-emp/add-emp.component';
import { EditEmpComponent } from './home/edit-emp/edit-emp.component';


const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "home", component: HomeComponent},
  {path: "addEmp", component: AddEmpComponent},
  {path: "editEmp", component: EditEmpComponent},
  {path: "**", redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
