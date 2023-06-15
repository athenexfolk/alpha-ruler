import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LessonPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    NgOptimizedImage
  ]
})
export class LessonModule { }
