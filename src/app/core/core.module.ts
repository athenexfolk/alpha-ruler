import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
