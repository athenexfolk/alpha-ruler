import { Component } from '@angular/core';

@Component({
  selector: 'menubar-icon',
  template: `
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`
})
export class MenubarComponent {

}
