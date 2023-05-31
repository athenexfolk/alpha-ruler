import {Component, Input} from '@angular/core';
import {Subject} from "src/app/core/models/subject";
import {EventsService} from "../../../../core/services/events.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() lessonMap: Subject[] = []

  constructor(private eventService: EventsService) {
  }

  sendClick() {
    this.eventService.click()
  }
}
