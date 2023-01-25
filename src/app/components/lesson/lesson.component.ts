import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() legal_lesson!:Lesson
  @Input() receivedScrollId = ''

  ngOnInit(): void {
  }

  topicScrolling(id:string){
    let element = document.getElementById(id)
    element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.topicScrolling(this.receivedScrollId)
  }

}
