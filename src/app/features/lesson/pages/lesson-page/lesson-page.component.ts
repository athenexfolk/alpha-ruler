import { Component, OnInit } from '@angular/core';
import {Subject} from "src/app/core/models/subject";
import {LessonService} from "src/app/core/services/lesson.service";

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent implements OnInit {
  lessonMap: Subject[] = []

  constructor(private lessonService: LessonService) {
  }
  ngOnInit() {
    this.lessonService.getLessonMap().subscribe(subjects => this.lessonMap = subjects)
  }

  protected readonly close = close;
}
