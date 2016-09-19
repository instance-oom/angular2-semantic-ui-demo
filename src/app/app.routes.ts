import { Routes } from '@angular/router';
import { PAGE_ROUTES } from './pages/page.routes';

let routes: Routes = [
  ...PAGE_ROUTES,
  {
    path: '**',
    redirectTo: '/'
  }
];

export const AppRouts = routes;