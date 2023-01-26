import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';



const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "edit/:id", component: EditComponent},
  {path: "add", component: AddComponent},
  {path: "view/:id", component: ViewComponent},
  {path: "home", component: HomeComponent},
  {path: "test", component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
