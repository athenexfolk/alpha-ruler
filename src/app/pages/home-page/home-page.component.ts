import { Component, OnInit } from '@angular/core';
import { LessonList } from 'src/app/data/lessonList';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  lessonList = [...LessonList].reverse()

  ngOnInit(): void {
    console.log(this.lessonList);
    
  }

}
