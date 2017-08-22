import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LsuDemoLayoutPage,
  HomePage
} from './pages';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
