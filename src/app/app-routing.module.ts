import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { Task2Component } from './task2/task2.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent},
  {path:'privacy-policy' , component:AdminComponent},
  {path:'relitix-message' , component:Task2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
