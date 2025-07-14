import { Component } from '@angular/core';
import { Address } from '../../components/address/address';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-componentes',
  imports: [Address, MarkdownComponent],
  templateUrl: './blog-componentes.html',
  styleUrl: './blog-componentes.css',
})
export class BlogComponentes {
  data = `
     \`\`\`typescript
     import { Component } from '@angular/core';

    @Component({
      selector: 'app-advanced-example',
      templateUrl: './advanced-example.component.html',
      styleUrls: ['./advanced-example.component.scss'],
      standalone: true, // Angular 20 Standalone Components
      imports: [],
    })

    export class AdvancedExampleComponent {
      // Propiedades y lógica aquí
    }
     
     \`\`\``;
  data2 = `
     \`\`\`typescript
import { 
  Component, Input, OnInit, OnDestroy, AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: '<p>{{data}}</p>',
  standalone: true
})
export class LifecycleDemoComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() data: string = '';

    ngOnInit() {
      // Ideal para inicializar data que depende de los Inputs
    }

    ngAfterViewInit() {
      // Manipulación directa de la vista (evitar manipulación DOM directa)
    }

    ngOnDestroy() {
      // Limpieza (ej: unsusbscribe a observables)
    }
}
     \`\`\``;
  data3 = `
     \`\`\`typescript
// Hijo
@Input() value!: string;
@Output() changed = new EventEmitter<string>();
     \`\`\``;
       data4 = `
     \`\`\`typescript
@ViewChild(ChildComponent) childComp!: ChildComponent;
     \`\`\``;

       data5 = `
     \`\`\`typescript
      @Injectable({ providedIn: 'root' })
        export class DataService {
          private data$ = new BehaviorSubject<string>('init');
          dataChanged$ = this.data$.asObservable();

          updateData(value: string) {
            this.data$.next(value);
          }
      }
     \`\`\``;
       data6 = `
     \`\`\`typescript
    import { signal, computed } from '@angular/core';

    export class CounterService {
      count = signal(0);
      doubled = computed(() => this.count() * 2);

      increment() {
        this.count.update(v => v + 1);
      }
    }
     \`\`\``;




}
