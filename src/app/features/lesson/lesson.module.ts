import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';
import { OverviewComponent } from './pages/overview/overview.component';
import {SharedModule} from "../../shared/shared.module";
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';


@NgModule({
  declarations: [
    LessonPageComponent,
    NavigationComponent,
    ContentComponent,
    OverviewComponent,
    MobileNavComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
