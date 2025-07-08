1. Fundamentos de Angular

    Estructura de un proyecto Angular (CLI, archivos principales)
    Componentes (creación, ciclo de vida, comunicación)
    Templates y Data Binding (one-way, two-way, property, event binding)
    Directivas (ngIf, ngFor, directivas estructurales y de atributo)
    Pipes (uso y creación de pipes personalizados)
    Servicios e Inyección de Dependencias (DI)

2. Ruteo y Navegación

    Configuración de rutas (RouterModule)
    Rutas hijas y rutas anidadas
    Guards (AuthGuard, CanActivate, CanDeactivate, etc.)
    Lazy Loading de módulos
    Parámetros de ruta y navegación programática

3. Estructura y Arquitectura del Proyecto

    Modularización (feature modules, shared modules, core module)
    Organización de carpetas y buenas prácticas
    Separación de responsabilidades (componentes, servicios, modelos)

4. Gestión del Estado

    Servicios singleton para estado compartido
    Observables y RxJS (Subjects, BehaviorSubject, operadores comunes)
    State management avanzado (NgRx, Akita, NGXS, etc.)

5. Formularios

    Formularios reactivos vs. formularios basados en templates
    Validaciones (sincrónicas y asincrónicas)
    Custom validators
    Control de formularios dinámicos

6. Consumo de APIs

    HttpClientModule
    Manejo de peticiones HTTP (GET, POST, PUT, DELETE)
    Interceptores (para auth, logging, manejo de errores)
    Manejo de errores HTTP

7. Comunicación entre Componentes

    @Input() y @Output()
    EventEmitter
    Servicios para comunicación global

8. Performance y Optimización

    Lazy loading de módulos y componentes
    ChangeDetectionStrategy (Default, OnPush)
    TrackBy en ngFor
    Preloading strategies
    Optimización de bundles (Tree shaking, minificación)
    Uso eficiente de RxJS (unsubscribe, takeUntil, etc.)

9. Testing

    Unit testing (Jasmine, Karma)
    Test de componentes, servicios y pipes
    Test de integración y end-to-end (Protractor, Cypress)

10. Seguridad

    Protección de rutas
    Prevención de XSS y CSRF (Angular generalmente lo maneja, pero es importante conocerlo)
    Manejo seguro de tokens (JWT)

11. Accesibilidad y buenas prácticas de UI

    ARIA y componentes accesibles
    Internacionalización (i18n)
    Tematización y estilos (Angular Material, SCSS, etc.)

12. DevOps y Herramientas

    Configuración de ambientes (environment.ts)
    Build y deploy (Angular CLI, Docker, CI/CD)
    Linting y formateo de código (TSLint, Prettier)
    Versionado y migraciones (Angular Update)

13. Integraciones y librerías externas

    Angular Material, PrimeNG, o Bootstrap para UI
    Integración con librerías de gráficos, mapas, etc.

Recomendaciones generales:

    Sigue el Angular style guide oficial.
    Prioriza la reutilización y separación de responsabilidades.
    Documenta y testa tu código.
