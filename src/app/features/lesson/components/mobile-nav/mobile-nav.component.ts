import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../../core/services/events.service";

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  isOpen = false

  constructor(private eventService: EventsService) {
  }

  openMenu() {
    this.isOpen = true
  }

  closeMenu() {
    this.isOpen = false
  }

  ngOnInit() {
    this.eventService.clickEvent.subscribe(() => this.closeMenu())
  }
}
