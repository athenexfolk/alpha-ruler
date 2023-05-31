import {Component, HostListener} from '@angular/core';
import {menus} from "../../menus";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn = false
  isMenuOpen = false
  isScrollLeaveTop = false
  scrollDelta = 5
  menuList = menus
  brand = "AlphaRuler"

  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

  openMenu() {
    this.isMenuOpen = true
  }

  closeMenu() {
    this.isMenuOpen = false
  }

  logout() {
    this.auth.logout()
    this.router.navigate(["/login"]).then()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrollLeaveTop = (window.scrollY > this.scrollDelta)
  }
}
