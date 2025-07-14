import { Component } from '@angular/core';
import { Address } from "../../components/address/address";
import { MarkdownComponent, ClipboardButtonComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-estruc',
  imports: [Address, MarkdownComponent],
  templateUrl: './blog-estruc.html',
  styleUrl: './blog-estruc.css'
})
export class BlogEstruc {
 data=`
   \`\`\`markdown
src/
├── app/
│   ├── core/                  # Core module: servicios singleton, interceptores, guards
│   │   ├── interceptors/
│   │   ├── guards/
│   │   ├── services/
│   │   ├── core.module.ts
│   │   └── index.ts
│   ├── shared/                # Shared module: componentes, pipes, directivas reutilizables
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── models/
│   │   ├── shared.module.ts
│   │   └── index.ts
│   ├── features/              # Módulos de funcionalidad (lazy loaded)
│   │   ├── feature1/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── feature1-routing.module.ts
│   │   │   └── feature1.module.ts
│   │   ├── feature2/
│   │   │   └── ...
│   ├── layout/                # Componentes de layout (navbar, sidebar, footer)
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   └── layout.module.ts
│   ├── state/                 # Gestión de estado global (NgRx, NGXS, etc.)
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── selectors/
│   │   ├── effects/
│   │   └── index.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── main.ts
├── assets/                    # Imágenes, fuentes, etc.
├── environments/              # Configuración para diferentes entornos
│   ├── environment.ts
│   ├── environment.prod.ts
├── styles/                    # SCSS/CSS globales
│   ├── themes/
│   ├── variables.scss
│   └── styles.scss
├── index.html
└── 

\`\`\``
 
 
}
