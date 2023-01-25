import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  menu!:HTMLElement
  head!:HTMLElement

  lastScrollPosition = 0

  @HostListener('window:scroll',['$event'])
  scrollOnScreen(){
    if(window.scrollY >= 56){
      this.head.classList.add('hide-head')
      this.menu.classList.add('shadow')
      if(window.scrollY >= 104 && window.scrollY > this.lastScrollPosition){
        this.head.classList.add('hide-head-scroll-down')
      }else{
        this.head.classList.remove('hide-head-scroll-down')
      }
    }else{
      this.head.classList.remove('hide-head')
      this.menu.classList.remove('shadow') 
    }

    this.lastScrollPosition = window.scrollY <= 0?0:window.scrollY
  }
  ngOnInit(): void {
    this.menu = document.querySelector('.menu') as HTMLElement
    this.head = document.querySelector('.header-wrapper') as HTMLElement
  }

}
