import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule,],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  isMobile(): boolean {
    return window.innerWidth < 1024;
  }
}
