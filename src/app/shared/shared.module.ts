import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { MenubarComponent } from './icon-components/menubar/menubar.component';
import { XMarkComponent } from './icon-components/x-mark/x-mark.component';
import { LibraryComponent } from './icon-components/library/library.component';
import { KeyComponent } from './icon-components/key/key.component';
import { UserComponent } from './icon-components/user/user.component';
import { LoginComponent } from './icon-components/login/login.component';
import { LogoutComponent } from './icon-components/logout/logout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MenubarComponent,
    XMarkComponent,
    LibraryComponent,
    KeyComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    MenubarComponent,
    XMarkComponent,
    LibraryComponent,
    KeyComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class SharedModule { }
