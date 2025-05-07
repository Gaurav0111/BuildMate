import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule], // Enables Angular directives like *ngIf
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  showBrick = false; // Tracks whether the brick icon should be displayed

  // Toggles the brick icon when the slogan is clicked
  toggleBrick() {
    this.showBrick = !this.showBrick;
  }
}