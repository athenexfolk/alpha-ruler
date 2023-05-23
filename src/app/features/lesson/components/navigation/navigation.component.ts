import { Component } from '@angular/core';
import { menus } from 'src/app/menuList';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isOpen = false
  menuList = menus

  openMenu() {
    this.isOpen = true
  }

  closeMenu() {
    this.isOpen = false
  }
}
