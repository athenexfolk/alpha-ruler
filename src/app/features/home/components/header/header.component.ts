import { Component } from '@angular/core';
import { menus } from 'src/app/menuList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuList = menus

  mobileMenuClasses = {
    'hidden': true
  }

  openMenu() {
    this.mobileMenuClasses['hidden'] = false
  }
  closeMenu () {
    this.mobileMenuClasses['hidden'] = true
  }
}
