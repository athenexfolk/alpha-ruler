import { Component, HostListener } from '@angular/core';
import { menus } from 'src/app/menuList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false
  scrollDelta = 5
  isScrollDelta = false
  menuList = menus

  openMenu() {
    this.isOpen = true
  }
  closeMenu () {
    this,this.isOpen = false
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrollDelta = (window.scrollY > this.scrollDelta) ? true : false
  }
}
