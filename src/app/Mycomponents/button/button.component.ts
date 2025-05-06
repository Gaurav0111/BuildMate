import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button class="btn btn-{{type}} mx-2">{{label}}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: string = 'primary';
}