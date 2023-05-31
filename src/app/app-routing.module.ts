import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivateAdmin} from "./core/services/auth.service";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "lesson",
    loadChildren: () => import('./features/lesson/lesson.module').then(m => m.LessonModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [canActivateAdmin]
  },
  {
    path: "login",
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
