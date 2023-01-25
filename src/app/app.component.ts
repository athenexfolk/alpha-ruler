import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alpha-ruler';
  constructor(iconRegistry: MatIconRegistry){
    iconRegistry.registerFontClassAlias('MSR','MSR')
  }
  ngOnInit(): void {
      
  }
}
