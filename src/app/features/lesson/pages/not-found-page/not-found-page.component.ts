import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit{
  title = "Not found - AlphaRuler"

  constructor(private titleService:Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }
}
