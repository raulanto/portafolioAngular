import { Component } from '@angular/core';
import { Address } from '../../../components/address/address';
import { Code } from '../../../components/code/code';
import { Toggle } from '../../../components/toggle/toggle';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blogbtn-dark',
  imports: [Address, Code, Toggle, MarkdownComponent],
  templateUrl: './blogbtn-dark.html',
  styleUrl: './blogbtn-dark.css',
})
export class BlogbtnDark {
  markdown = `
  \`\`\`html
  <button (click)="toggleTheme()"
      class="p-2 rounded transition-colors duration-200 bg-stone-200 dark:bg-stone-950 border dark:border-stone-800 border-stone-300"
      aria-label="Toggle dark mode">
      @if (isDark) { <span>🌙</span> }
      @else { <span>☀️</span> }
  </button>
\`\`\``;

data=`
  \`\`\`typeScript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
\`\`\``;


data2=`
\`\`\`html
<app-toggle></app-toggle>
\`\`\`

`
}
