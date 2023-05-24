import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteRoutingModule } from './write-routing.module';
import { WritePageComponent } from './pages/write-page/write-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WritePageComponent
  ],
  imports: [
    CommonModule,
    WriteRoutingModule,
    FormsModule
  ]
})
export class WriteModule { }
