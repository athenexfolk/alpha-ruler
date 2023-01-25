import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "lesson",
    component: LessonPageComponent,
    children: [
      {
        path: ":id",
        component: LessonComponent
      }
    ]
  },
  {
    path: "calculator",
    component: CalculatorPageComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
