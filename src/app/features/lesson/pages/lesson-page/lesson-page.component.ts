import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.scss']
})
export class LessonPageComponent {
  lessonNav = [
    {
      subjectId: "math",
      nameTH: "คณิตศาสตร์",
      lessons: [
        {
          lessonId: "counting-number",
          nameTH: "จำนวนนับ",
        }
      ]
    }
  ]
}
