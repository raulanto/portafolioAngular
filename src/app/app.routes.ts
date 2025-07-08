import { PagesNotFund } from './pages/pages-not-fund/pages-not-fund';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skeleton } from './layout/skeleton/skeleton';
import { Index } from './pages/index';
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
