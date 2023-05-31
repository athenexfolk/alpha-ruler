import { Component, OnInit } from '@angular/core';
import {LessonService} from "../../../../core/services/lesson.service";
import {Subject} from "../../../../core/models/subject";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  subjectMap: Subject[] = []
  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessonMap().subscribe(smap => this.subjectMap = smap)
  }
}
