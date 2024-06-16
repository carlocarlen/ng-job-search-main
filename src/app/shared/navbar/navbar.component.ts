import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentTab: string = 'jobs'; // Default to 'jobs' tab

  setCurrentTab(tabName: string): void {
    this.currentTab = tabName;
  }
}
