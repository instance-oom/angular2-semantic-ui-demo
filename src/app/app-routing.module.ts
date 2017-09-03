import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LsuDemoLayoutPage,
  HomePage,

  AccordionDemoPage,
  CheckBoxDemoPage,
  DimmerDemoPage,
  DropdownDemoPage,
  LoaderDemoPage,
  ModalDemoPage
} from './pages';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage },

      { path: 'accordion', component: AccordionDemoPage },
      { path: 'checkbox', component: CheckBoxDemoPage },
      { path: 'dimmer', component: DimmerDemoPage },
      { path: 'dropdown', component: DropdownDemoPage },
      { path: 'loader', component: LoaderDemoPage },
      { path: 'modal', component: ModalDemoPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
