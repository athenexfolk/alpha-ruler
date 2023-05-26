import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LessonPageComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
