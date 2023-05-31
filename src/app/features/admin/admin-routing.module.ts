import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: AdminPageComponent,
    children: [
      {
        path: "",
        component: MainPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
