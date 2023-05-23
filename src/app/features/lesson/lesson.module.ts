import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    LessonPageComponent,
    NavigationComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
