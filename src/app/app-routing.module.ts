import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
