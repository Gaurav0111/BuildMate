import { Component } from '@angular/core';
import { NavigationBarComponent } from "./Mycomponents/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true, // Make AppComponent standalone as well
  imports: [NavigationBarComponent], // Only import the NavigationBarComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuildMate';
}
