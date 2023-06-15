import {Component, OnInit} from '@angular/core';
import {Subject} from "../../models/subject";
import {LessonService} from "../../services/lesson/lesson.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  lessonMap: Subject[] = []

  constructor(private lessonService: LessonService) {
  }
  ngOnInit() {
    this.lessonService.getLessonMap().subscribe(subjects => this.lessonMap = subjects)
  }
}
