import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
})
export class Toggle {
  isDark: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Solo accede a localStorage en el navegador
      this.isDark =
        window.localStorage.getItem('theme') === 'dark' ||
        (!window.localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.updateTheme();
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
  }

  updateTheme() {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (this.isDark) {
        root.classList.add('dark');
        console.log('Dark mode enabled');
      } else {
        root.classList.remove('dark');
        console.log('Dark mode disabled');
      }
    }
  }
}
