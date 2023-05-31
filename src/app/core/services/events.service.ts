import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  @Output() clickEvent = new EventEmitter()

  constructor() { }

  click() {
    this.clickEvent.emit()
  }
}
