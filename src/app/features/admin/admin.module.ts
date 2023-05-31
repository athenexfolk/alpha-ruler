import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ToolsComponent} from './components/tools/tools.component';
import {ToolComponent} from './components/tool/tool.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminPageComponent,
    MainPageComponent,
    ToolsComponent,
    ToolComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {
}
