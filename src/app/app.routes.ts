import { PagesNotFund } from './pages/pages-not-fund/pages-not-fund';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skeleton } from './layout/skeleton/skeleton';
import { Index } from './pages/index';

import { BlogbtnDark } from './pages/bloques/blogbtn-dark/blogbtn-dark';
import { BlogEstruc } from './pages/blog-estruc/blog-estruc';
import { BlogComponentes } from './pages/blog-componentes/blog-componentes';
import { BlogTemplate } from './pages/blog-template/blog-template';
export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'portafolio',
    component: Skeleton,
    children: [
      {
        path: '',
        component: Index,
        pathMatch: 'full',
      },
      {
        path: 'estructura',
        component: BlogEstruc,
      },
      {
        path: 'BotonDark',
        component: BlogbtnDark,
      },
      {
        path: 'Componentes',
        component: BlogComponentes,
      },
      {
        path: 'Templates',
        component: BlogTemplate,
      },
    ],
  },
  {
    path: 'PagesNotFund',
    component: PagesNotFund,
  },
  {
    path: '**',
    redirectTo: 'PagesNotFund',
    pathMatch: 'full',
  },
];
