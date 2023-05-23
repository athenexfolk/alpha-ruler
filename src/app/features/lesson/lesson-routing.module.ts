import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';

const routes: Routes = [
  {
    path: "",
    component: LessonPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
