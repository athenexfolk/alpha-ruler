import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/core/services/lesson.service';
import { menus } from 'src/app/menuList';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isOpen = false
  menuList = menus

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

  constructor(){}

  openMenu() {
    this.isOpen = true
  }

  closeMenu() {
    this.isOpen = false
  }

  ngOnInit(): void {
    
  }
}
