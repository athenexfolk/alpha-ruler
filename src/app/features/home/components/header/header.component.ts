import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobileMenuClasses = {
    'hidden': true
  }

  menuList = [
    {
      name: "Home",
      path: "/home"
    }
  ]

  openMenu() {
    this.mobileMenuClasses['hidden'] = false
  }
  closeMenu () {
    this.mobileMenuClasses['hidden'] = true
  }
}
