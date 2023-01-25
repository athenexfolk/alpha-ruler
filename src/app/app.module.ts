import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BodyComponent } from './components/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './modules/material/material.module';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MathjaxModule } from 'mathjax-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BodyComponent,
    MenuComponent,
    LessonPageComponent,
    CalculatorPageComponent,
    LessonComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MathjaxModule.forRoot(
      {
        "config": {
          "chtml": {
            scale: 0.85
          },
          "svg": {
              scale: 0.85
          }
        }
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
