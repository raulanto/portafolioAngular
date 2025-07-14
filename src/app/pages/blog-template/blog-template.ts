import { Component } from '@angular/core';
import { Address } from '../../components/address/address';
import { MarkdownComponent } from 'ngx-markdown';
@Component({
  selector: 'app-blog-template',
  imports: [Address, MarkdownComponent],
  templateUrl: './blog-template.html',
  styleUrl: './blog-template.css',
})
export class BlogTemplate {
  data = `
     \`\`\`typescript
    export class AppComponent {
        titulo = 'Hola Angular';
    } 
     \`\`\``;
  data2 = `
  \`\`\`html
  <h1 [innerText]="titulo"></h1>
    <!-- O bien -->
  <img [src]="imagenUrl">
  \`\`\`
     `;

     data3=`
       \`\`\`html
export class AppComponent {
  mostrarAlerta() {
    alert('¡Haz hecho clic!');
  }
}
  \`\`\`
     `
     data4=`
            \`\`\`typescript
<button (click)="mostrarAlerta()">Click me</button>
  \`\`\`
     `
          data5=`
            \`\`\`typescript
export class AppComponent {
  nombre = '';
}
  \`\`\`
     `
               data6=`
            \`\`\`typescript
<input [(ngModel)]="nombre" placeholder="Escribe tu nombre">
<p>Hola, {{ nombre }}</p>
  \`\`\`
     `
}
