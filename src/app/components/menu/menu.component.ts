import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LessonList } from 'src/app/data/lessonList';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input() lessonSelector = false
  @Input() lessonMenu!:Lesson

  @Output() sendScrollId = new EventEmitter<string>()

  lessonList = [...LessonList]

  scrollToTopic(id:string){
    this.sendScrollId.emit(id)
  }

  ngOnInit(): void {
      
  }

}
