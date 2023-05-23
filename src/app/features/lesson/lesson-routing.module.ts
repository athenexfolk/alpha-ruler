import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: "",
    component: LessonPageComponent,
    children: [
      {
        path: ":subjectId/:lessonId",
        component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
