import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LessonList } from 'src/app/data/lessonList';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.css']
})
export class LessonPageComponent implements OnInit, AfterContentInit {

  constructor(private router:Router) {}

  sidenav_status = 'menu'

  isLessonSelected = false
  isLessonLegal = false
  lesson!:Lesson

  scrollId = ''

  getScrollId(id:string){
    this.scrollId = id
    this.toggleSideNav()
  }

  toggleSideNav(){
    let sidenav_element = document.querySelector('.sidenav') as HTMLElement
    if(this.sidenav_status === 'close'){
      this.sidenav_status = 'menu'
      sidenav_element.classList.remove('sidenav-open')
    }else if(this.sidenav_status === 'menu'){    
      this.sidenav_status = 'close'
      sidenav_element.classList.add('sidenav-open')
    }
  }

  ngOnInit(): void {
    if(this.router.url === '/lesson'){
      this.isLessonSelected = false
    }else if(this.router.url.slice(0,8) === '/lesson/'){
      this.isLessonSelected = true
      this.lesson = LessonList.find((obj) => {
        return obj.id === this.router.url.slice(8)
      })!
      if(this.lesson){
        this.isLessonLegal = true
      }else{
        this.isLessonLegal = false
      }
    }
    
  }

  ngAfterContentInit(): void {
    if(this.router.url === '/lesson'){
      this.isLessonSelected = false
    }
    this.router.events.pipe(filter(e=>e instanceof NavigationEnd)).subscribe((e)=>{
      if(e instanceof NavigationEnd){
        let route = e.url
        if(route.slice(0,8) === '/lesson/'){
          this.isLessonSelected = true
          this.lesson = LessonList.find((obj) => {
            return obj.id === route.slice(8)
          })!
          if(this.lesson){
            this.isLessonLegal = true          
          }else{
            this.isLessonLegal = false
          }
        }else if(route === '/lesson'){
          this.isLessonSelected = false
        }
      }
    });
  }

}
