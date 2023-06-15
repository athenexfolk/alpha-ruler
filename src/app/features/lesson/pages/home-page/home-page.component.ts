import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = "Home - AlphaRuler"
  heroText = "AlphaRuler"
  description = "Description"

  constructor(private titleService:Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
    this.meta.addTags([
      { name: 'description', content: 'This is an home page for describe overview and suggestion of lesson' },
      { name: 'keywords', content: 'lesson, learn, suggest' }
    ])
  }
}
