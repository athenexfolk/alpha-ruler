import { Component, Input } from '@angular/core';
import { menus } from 'src/app/menuList';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isOpen = false
  menuList = menus

  openMenu() {
    this.isOpen = true
  }

  closeMenu() {
    this.isOpen = false
  }
}
