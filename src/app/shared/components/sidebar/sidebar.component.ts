import { Component } from '@angular/core';
import {menus} from "../../menus";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuList = menus
  brand = "AlphaRuler"

  isLoggedIn!: boolean

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
    this.router.navigate(["/login"]).then()
  }
}
