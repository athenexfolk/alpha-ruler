import { Component } from '@angular/core';

@Component({
  selector: 'x-mark-icon',
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
        d="M6 18L18 6M6 6l12 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `
})
export class XMarkComponent {

}
