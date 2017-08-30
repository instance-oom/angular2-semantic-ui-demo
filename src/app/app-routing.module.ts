import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LsuDemoLayoutPage,
  HomePage,

  AccordionDemoPage
} from './pages';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage },

      { path: 'accordion', component: AccordionDemoPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
